import base64
import json
import re
import os
import requests # type: ignore

LASTFM_USER = os.environ['LASTFM_USER']
LASTFM_API_KEY = os.environ['LASTFM_API_KEY']
SPOTIFY_CLIENT_ID = os.environ['SPOTIFY_CLIENT_ID']
SPOTIFY_CLIENT_SECRET = os.environ['SPOTIFY_CLIENT_SECRET']

print(LASTFM_USER,LASTFM_API_KEY,SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_SECRET)

MEDIA_FILE = 'media-data.js' 

if not all([LASTFM_USER, LASTFM_API_KEY, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET]):
    raise Exception("Il manque une ou plusieurs variables d'environnement nécessaires.")
def get_lastfm_albums():
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user={LASTFM_USER}&api_key={LASTFM_API_KEY}&format=json&limit=50"
    response = requests.get(url)
    response.raise_for_status()
    data = response.json()
    albums = data.get("topalbums", {}).get("album", [])
    unique = {(a["artist"]["name"], a["name"]) for a in albums}
    return list(unique)


def get_spotify_token():
    print("Obtention du token Spotify...")
    response = requests.post(
        "https://accounts.spotify.com/api/token",
        data={"grant_type": "client_credentials"},
        auth=(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET),
    )
    response.raise_for_status()
    return response.json()["access_token"]


def get_spotify_album_info(token, artist, album):
    headers = {"Authorization": f"Bearer {token}"}
    query = f"album:{album} artist:{artist}"
    url = f"https://api.spotify.com/v1/search?q={requests.utils.quote(query)}&type=album&limit=1"
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return None
    results = response.json()["albums"]["items"]
    if not results:
        return None
    result = results[0]
    return {
        "title": result["name"],
        "author": result["artists"][0]["name"],
        "cover": result["images"][0]["url"] if result["images"] else "",
        "kind": "album",
        "link": result["external_urls"]["spotify"],
    }


def read_existing_links():
    existing_links = set()
    if not os.path.exists(MEDIA_FILE):
        return existing_links
    with open(MEDIA_FILE, "r", encoding="utf-8") as f:
        for line in f:
            match = re.search(r'link:\s*["\']([^"\']+)["\']', line)
            if match:
                existing_links.add(match.group(1))
    return existing_links

def append_to_media_file(album):
    with open(MEDIA_FILE, "r+", encoding="utf-8") as f:
        content = f.read()
        insert_pos = content.find("[") + 1
        if insert_pos == 0:
            raise Exception("Format inattendu dans media-data.js")

        new_entry = f"""
    {{
        title: \"{album['title']}\",
        author: \"{album['author']}\",
        cover: \"{album['cover']}\",
        kind: \"{album['kind']}\",
        link: \"{album['link']}\"
    }},"""

        updated = content[:insert_pos] + new_entry + content[insert_pos:]
        f.seek(0)
        f.write(updated)
        f.truncate()


def main():
    token = get_spotify_token()
    print("Spotify token obtenu.")

    lastfm_albums = get_lastfm_albums()
    print(f"{len(lastfm_albums)} albums uniques récupérés de Last.fm.")

    existing_links = read_existing_links()
    print(f"{len(existing_links)} liens déjà présents dans mediaLibrary.")

    added = 0
    for artist, album in lastfm_albums:
        info = get_spotify_album_info(token, artist, album)
        if info and info["link"] not in existing_links:
            append_to_media_file(info)
            existing_links.add(info["link"])
            added += 1
            print(f"Ajouté: {artist} - {album}")

    print(f"Ajouts terminés. {added} nouveaux albums insérés.")


if __name__ == "__main__":
    main()


