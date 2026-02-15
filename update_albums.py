import json
import re
import os
import requests  # type: ignore

LASTFM_USER = os.environ['LASTFM_USER']
LASTFM_API_KEY = os.environ['LASTFM_API_KEY']
SPOTIFY_CLIENT_ID = os.environ['SPOTIFY_CLIENT_ID']
SPOTIFY_CLIENT_SECRET = os.environ['SPOTIFY_CLIENT_SECRET']

MEDIA_FILE = 'media-data.js'

if not all([LASTFM_USER, LASTFM_API_KEY, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET]):
    raise Exception("ERROR IN ENV VAR")

def get_recent_albums_from_tracks():

    # limit=200 fetches the last ~200 songs played. Increase if you listen to A LOT between runs.
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user={LASTFM_USER}&api_key={LASTFM_API_KEY}&format=json&limit=200"
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    
    tracks = data.get("recenttracks", {}).get("track", [])
    unique_albums = set()

    # artist to not display because it's a well known miss tagging issue on Last.fm
    artistException = ["Kiki2way23", "Absolute Valentine", "Yariaverse Nirvanaa", "J-War23", ]
    
    for t in tracks:
        # Last.fm recenttracks structure uses '#text' for the name inside the dict
        artist_obj = t.get("artist", {})
        album_obj = t.get("album", {})
        
        # Handle cases where artist is a string or a dict (API varies sometimes)
        artist_name = artist_obj.get("#text") if isinstance(artist_obj, dict) else artist_obj
        album_name = album_obj.get("#text") if isinstance(album_obj, dict) else album_obj

        # Only add if both exist (ignores scrobbles without album metadata)
        if artist_name and album_name:
            if artist_name not in artistException:
                unique_albums.add((artist_name, album_name))
            
    return list(unique_albums)

def get_spotify_token():
    # getting spotify token
    response = requests.post(
        "https://accounts.spotify.com/api/token",
        data={"grant_type": "client_credentials"},
        auth=(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET),
    )
    response.raise_for_status()
    return response.json()["access_token"]

def get_spotify_album_info(token, artist, album):
    q = f'album:{album} artist:{artist}'
    headers = {"Authorization": f"Bearer {token}"}
    params = {"q": q, "type": "album", "limit": 1}
    
    try:
        resp = requests.get("https://api.spotify.com/v1/search", headers=headers, params=params)
        if resp.status_code != 200:
            print(f"Spotify search error for album {album} - {artist}: {resp.text}")
            return None
            
        items = resp.json().get('albums', {}).get('items', [])
        if not items:
            return None
        
        item = items[0]
        return {
            "title": item['name'],
            "author": item['artists'][0]['name'],
            "cover": item['images'][0]['url'] if item['images'] else None,
            "link": item['external_urls']['spotify'],
            "kind": "album",
            "comment": "Github Action",
        }
    except Exception as e:
        print(f"Exception during Spotify search for {album}: {e}")
        return None

def read_existing_entries():
    entries = {}
    if not os.path.exists(MEDIA_FILE):
        return entries
    
    with open(MEDIA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        
        # UDPATED REGEX: Handles escaped quotes like \"
        # Looks for content between quotes that is EITHER a normal char OR an escaped char. Thanks to "Heroes" from David Bowie lol you crashed my stuff
        pattern = r'{\s*title:\s*"((?:[^"\\]|\\.)*)"\s*,\s*author:\s*"((?:[^"\\]|\\.)*)"\s*,\s*cover:\s*"([^"]+)"'
        
        blocks = re.findall(pattern, content)
        for title, author, cover in blocks:
            #unescape the title for comparison (turn \"Heroes\" back to "Heroes")
            clean_title = title.replace('\\"', '"')
            clean_author = author.replace('\\"', '"')
            entries[(clean_title.lower(), clean_author.lower())] = cover
            
    return entries

def escape_str(s):
    """Helper to escape double quotes for JS strings"""
    if s:
        return s.replace('"', '\\"')
    return ""

def update_cover_in_file(title, author, new_cover_url):
    clean_title = escape_str(title)
    clean_author = escape_str(author)

    with open(MEDIA_FILE, "r+", encoding="utf-8") as f:
        content = f.read()
        # Regex must match the ESCAPED version in the file
        pattern = re.compile(
            r'({\s*title:\s*"' + re.escape(clean_title) + r'"[^}]*author:\s*"' + re.escape(clean_author) + r'"[^}]*cover:\s*")[^"]*(")', re.IGNORECASE)
        
        content_new, count = pattern.subn(r'\1' + new_cover_url + r'\2', content)
        if count > 0:
            print(f"updated cover {title} - {author}")
            f.seek(0)
            f.write(content_new)
            f.truncate()

def append_to_media_file(album):
    with open(MEDIA_FILE, "r+", encoding="utf-8") as f:
        content = f.read()
        insert_pos = content.find("[") + 1
        if insert_pos == 0:
            raise Exception("Unexpected format in media-data.js")

        # Use escape_str to prevent breaking the JSON with quotes
        new_entry = f"""
    {{
        title: "{escape_str(album['title'])}",
        author: "{escape_str(album['author'])}",
        cover: "{album['cover']}",
        kind: "{album['kind']}",
        link: "{album['link']}",
        comment: "{escape_str(album['comment'])}"
    }},"""

        updated = content[:insert_pos] + new_entry + content[insert_pos:]
        f.seek(0)
        f.write(updated)
        f.truncate()

def main():
    token = get_spotify_token()
    print("obtained spotify token")

    # Modified call to get recent tracks
    recent_albums = get_recent_albums_from_tracks()
    print(f"{len(recent_albums)} unique albums found in recent listens.")

    existing_entries = read_existing_entries()
    print(f"{len(existing_entries)} titles already present in mediaLibrary.")

    added = 0
    # Process the recent albums
    for artist, album in recent_albums:
        # Check existence BEFORE calling Spotify API to save time/quota
        if (album.lower(), artist.lower()) in existing_entries:
            current_cover = existing_entries[(album.lower(), artist.lower())]

        # If not in file, fetch from Spotify
        info = get_spotify_album_info(token, artist, album)
        if not info or not info["cover"]:
            continue
            
        # Double check key with Spotify normalized data
        key = (info["title"].lower(), info["author"].lower())

        if key in existing_entries:
            current_cover = existing_entries[key]
            if not current_cover.startswith("http"):
                update_cover_in_file(info["title"], info["author"], info["cover"])
        else:
            append_to_media_file(info)
            added += 1
            print(f"Ajouté : {info['author']} - {info['title']}")

    print(f"Ajouts terminés. {added} nouveaux albums insérés.")

if __name__ == "__main__":
    main()