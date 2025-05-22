import fs from 'fs';
import axios from 'axios';

const LASTFM_USER = process.env.LASTFM_USER;
const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

const MEDIA_FILE = 'media-data.js';

// Step 1: Get Spotify token
async function getSpotifyToken() {
  const res = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  return res.data.access_token;
}

// Step 2: Get recent tracks from Last.fm
async function getRecentAlbums() {
  const res = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=50`);
  const tracks = res.data.recenttracks.track;
  const uniqueAlbums = new Map();
  for (const t of tracks) {
    const artist = t.artist['#text'];
    const album = t.album['#text'];
    if (artist && album) {
      uniqueAlbums.set(`${artist} - ${album}`, { artist, album });
    }
  }
  return Array.from(uniqueAlbums.values());
}

// Step 3: Search Spotify
async function getSpotifyAlbumInfo(token, artist, album) {
  const q = encodeURIComponent(`album:${album} artist:${artist}`);
  const res = await axios.get(`https://api.spotify.com/v1/search?q=${q}&type=album&limit=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const item = res.data.albums.items[0];
  if (!item) return null;

  return {
    title: item.name,
    author: item.artists[0].name,
    cover: item.images[0]?.url,
    link: item.external_urls.spotify,
    rating: 0,
    kind: 'album',
  };
}

// Step 4: Read current media-data.js
function readCurrentMediaData() {
  const raw = fs.readFileSync(MEDIA_FILE, 'utf-8');
  const json = raw.match(/export const mediaData = (.*);/s);
  return JSON.parse(json[1]);
}

// Step 5: Write updated media-data.js
function writeMediaData(data) {
  const content = `export const mediaData = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync(MEDIA_FILE, content, 'utf-8');
}

(async () => {
  const token = await getSpotifyToken();
  const albums = await getRecentAlbums();
  const existing = readCurrentMediaData();
  const existingKeys = new Set(existing.map(e => `${e.title} - ${e.author}`));

  let added = 0;
  for (const { artist, album } of albums) {
    const key = `${album} - ${artist}`;
    if (existingKeys.has(key)) continue;

    const info = await getSpotifyAlbumInfo(token, artist, album);
    if (info) {
      existing.unshift(info);
      existingKeys.add(`${info.title} - ${info.author}`);
      added++;
    }

    if (added >= 5) break; // avoid rate limits
  }

  if (added > 0) {
    writeMediaData(existing);
    console.log(`✅ Added ${added} new album(s).`);
  } else {
    console.log('🔄 No new albums found.');
  }
})();
