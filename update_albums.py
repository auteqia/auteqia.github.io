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
    q = f'album:{album} artist:{artist}'
    headers = {"Authorization": f"Bearer {token}"}
    params = {"q": q, "type": "album", "limit": 1}
    resp = requests.get("https://api.spotify.com/v1/search", headers=headers, params=params)
    if resp.status_code != 200:
        print(f"Erreur Spotify recherche album {album} - {artist}: {resp.text}")
        return None
    items = resp.json()['albums']['items']
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

def read_existing_entries():
    entries = {}
    if not os.path.exists(MEDIA_FILE):
        return entries
    with open(MEDIA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        blocks = re.findall(r'{\s*title:\s*"([^"]+)",\s*author:\s*"([^"]+)",\s*cover:\s*"([^"]+)"', content)
        for title, author, cover in blocks:
            entries[(title.lower(), author.lower())] = cover
    return entries

def update_cover_in_file(title, author, new_cover_url):
    with open(MEDIA_FILE, "r+", encoding="utf-8") as f:
        content = f.read()
        pattern = re.compile(
            r'({\s*title:\s*"' + re.escape(title) + r'"[^}]*author:\s*"' + re.escape(author) + r'"[^}]*cover:\s*")[^"]*(")', re.IGNORECASE)
        content_new, count = pattern.subn(r'\1' + new_cover_url + r'\2', content)
        if count > 0:
            print(f"✅ Cover mise à jour pour {title} - {author}")
            f.seek(0)
            f.write(content_new)
            f.truncate()
        else:
            print(f"⚠️ Entrée non trouvée pour mise à jour : {title} - {author}")

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
        link: \"{album['link']}\",
        comment: \"{album['comment']}\"
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

    existing_entries = read_existing_entries()
    print(f"{len(existing_entries)} titres déjà présents dans mediaLibrary.")

    added = 0
    for artist, album in lastfm_albums:
        info = get_spotify_album_info(token, artist, album)
        if not info or not info["cover"]:
            continue

        key = (info["title"].lower(), info["author"].lower())

        if key in existing_entries:
            current_cover = existing_entries[key]
            if not current_cover.startswith("http"):
                update_cover_in_file(info["title"], info["author"], info["cover"])
        else:
            append_to_media_file(info)
            added += 1
            print(f"Ajouté : {artist} - {album}")

    print(f"Ajouts terminés. {added} nouveaux albums insérés.")

if __name__ == "__main__":
    main()
