import base64
import json
import os
import requests # type: ignore

LASTFM_USER = os.environ['LASTFM_USER']
LASTFM_API_KEY = os.environ['LASTFM_API_KEY']
SPOTIFY_CLIENT_ID = os.environ['SPOTIFY_CLIENT_ID']
SPOTIFY_CLIENT_SECRET = os.environ['SPOTIFY_CLIENT_SECRET']

print(LASTFM_USER,LASTFM_API_KEY,SPOTIFY_CLIENT_ID,SPOTIFY_CLIENT_SECRET)


if not all([LASTFM_USER, LASTFM_API_KEY, SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET]):
    raise Exception("Il manque une ou plusieurs variables d'environnement nécessaires.")

def get_spotify_token():
    auth_str = f"{SPOTIFY_CLIENT_ID}:{SPOTIFY_CLIENT_SECRET}"
    b64_auth = base64.b64encode(auth_str.encode()).decode()
    headers = {
        "Authorization": f"Basic {b64_auth}",
        "Content-Type": "application/x-www-form-urlencoded",
    }
    data = {"grant_type": "client_credentials"}
    resp = requests.post("https://accounts.spotify.com/api/token", headers=headers, data=data)
    resp.raise_for_status()
    token = resp.json()['access_token']
    print("Spotify token obtenu.")
    return token

def get_recent_albums():
    url = f"https://ws.audioscrobbler.com/2.0/"
    params = {
        "method": "user.getrecenttracks",
        "user": LASTFM_USER,
        "api_key": LASTFM_API_KEY,
        "format": "json",
        "limit": 50,
    }
    resp = requests.get(url, params=params)
    resp.raise_for_status()
    tracks = resp.json()['recenttracks']['track']
    unique_albums = {}
    for t in tracks:
        artist = t['artist']['#text']
        album = t['album']['#text']
        if artist and album:
            unique_albums[f"{artist} - {album}"] = {"artist": artist, "album": album}
    print(f"{len(unique_albums)} albums uniques récupérés de Last.fm.")
    return list(unique_albums.values())

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
        "rating": 0,
        "kind": "album",
    }

def read_media_data():
    if not os.path.exists(MEDIA_FILE):
        print(f"{MEDIA_FILE} not found.")
        return []

    with open(MEDIA_FILE, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract JS array with regex
    match = re.search(r"const mediaLibrary\s*=\s*(\[\s*[\s\S]*?\s*]);", content)
    if not match:
        raise Exception("mediaLibrary array not found in JS file.")

    array_str = match.group(1)
    try:
        # Replace single quotes with double quotes, fix trailing commas
        json_compatible = re.sub(r"//.*?\n", "", array_str)  # remove comments
        json_compatible = json_compatible.replace("'", '"')
        json_compatible = re.sub(r",\s*}", "}", json_compatible)
        json_compatible = re.sub(r",\s*]", "]", json_compatible)
        return json.loads(json_compatible)
    except Exception as e:
        raise Exception("Failed to parse mediaLibrary array.") from e

# --- Écriture du fichier media-data.json ---
def write_media_data(data):
    js_array_entries = []
    for item in data:
        lines = [f"    {k}: {json.dumps(v)}" for k, v in item.items()]
        entry = "    {\n" + ",\n".join(lines) + "\n    }"
        js_array_entries.append(entry)

    final_js = "const mediaLibrary = [\n" + ",\n".join(js_array_entries) + "\n];\n"

    with open(MEDIA_FILE, "w", encoding="utf-8") as f:
        f.write(final_js)

    print(f"{MEDIA_FILE} updated with {len(data)} entries.")

def main():
    token = get_spotify_token()
    albums = get_recent_albums()
    existing = read_media_data()

    existing_keys = set(f"{e['title']} - {e['author']}" for e in existing)

    added = 0
    for entry in albums:
        key = f"{entry['album']} - {entry['artist']}"
        if key in existing_keys:
            continue
        info = get_spotify_album_info(token, entry['artist'], entry['album'])
        if info:
            existing.insert(0, info)
            existing_keys.add(f"{info['title']} - {info['author']}")
            added += 1
        if added >= 5:  # éviter les limites de taux
            break

    if added > 0:
        write_media_data(existing)
        print(f" {added} nouvel(le)(s) album(s) ajouté(s).")
    else:
        print(" Aucun nouvel album trouvé.")

if __name__ == "__main__":
    main()

