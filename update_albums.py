import base64
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
    raise Exception("Il manque une ou plusieurs variables d'environnement nécessaires.")

def sanitize_filename(name):
    name = name.lower().strip()
    name = re.sub(r'[^\w\s-]', '', name)
    name = re.sub(r'\s+', '_', name)
    return name

def download_cover_image(url, artist, album):
    filename = f"{sanitize_filename(artist)}_{sanitize_filename(album)}.jpg"
    path = os.path.join("assets", "albums", filename)
    os.makedirs(os.path.dirname(path), exist_ok=True)

    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(path, "wb") as f:
                f.write(response.content)
            return path.replace("\\", "/")  # pour compatibilité GitHub Pages
        else:
            print(f"Erreur téléchargement image: {url}")
    except Exception as e:
        print(f"Erreur image {url}: {e}")

    return None

def get_lastfm_albums():
    url = f"https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user={LASTFM_USER}&api_key={LASTFM_API_KEY}&format=json&limit=50"
    response = requests.get(url)
    print(response)
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
    print(url)
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        return None
    results = response.json()["albums"]["items"]
    print("results: ", results)
    if not results:
        return None
    result = results[0]
    return {
        "title": result["name"],
        "author": result["artists"][0]["name"],
        "cover": result["images"][0]["url"] if result["images"] else "",
        "kind": "album",
        "link": result["external_urls"]["spotify"],
        "comment": "Github Action",
    }

def read_existing_titles():
    existing = set()
    if not os.path.exists(MEDIA_FILE):
        return existing
    with open(MEDIA_FILE, "r", encoding="utf-8") as f:
        content = f.read()
        matches = re.findall(r'title:\s*"([^"]+)",\s*author:\s*"([^"]+)"', content)
        for title, author in matches:
            existing.add((title.lower(), author.lower()))
    return existing

def append_to_media_file(album):
    path = download_cover_image(album["cover"], album["author"], album["title"])
    if path:
        album["cover"] = path
    else:
        print(f"Image non trouvée pour {album['title']}")

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

    existing_titles = read_existing_titles()
    print(f"{len(existing_titles)} titres déjà présents dans mediaLibrary.")

    added = 0
    for artist, album in lastfm_albums:
        info = get_spotify_album_info(token, artist, album)
        if info and (info["title"].lower(), info["author"].lower()) not in existing_titles:
            append_to_media_file(info)
            existing_titles.add((info["title"].lower(), info["author"].lower()))
            added += 1
            print(f"Ajouté: {artist} - {album}")

    print(f"Ajouts terminés. {added} nouveaux albums insérés.")

if __name__ == "__main__":
    main()
