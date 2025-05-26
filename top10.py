import os
import requests
import json

SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_API_URL = "https://api.spotify.com/v1"
CLIENT_ID = os.environ["SPOTIFY_CLIENT_ID"]
CLIENT_SECRET = os.environ["SPOTIFY_CLIENT_SECRET"]
#REFRESH_TOKEN = os.environ["SPOTIFY_REFRESH_TOKEN"]

def get_access_token():
    print("Obtention du token Spotify...")
    response = requests.post(
        "https://accounts.spotify.com/api/token",
        data={"grant_type": "client_credentials"},
        auth=(SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET),
    )
    response.raise_for_status()
    return response.json()["access_token"]

def fetch_top_short(endpoint, access_token):
    res = requests.get(
        f"{SPOTIFY_API_URL}/me/top/{endpoint}?limit=20&time_range=short_term",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    return res.json()["items"]

def fetch_top_medium(endpoint, access_token):
    res = requests.get(
        f"{SPOTIFY_API_URL}/me/top/{endpoint}?limit=20&time_range=medium_term",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    return res.json()["items"]

def fetch_top_long(endpoint, access_token):
    res = requests.get(
        f"{SPOTIFY_API_URL}/me/top/{endpoint}?limit=20&time_range=long_term",
        headers={"Authorization": f"Bearer {access_token}"}
    )
    return res.json()["items"]


def generate_tracks_js(top_tracks, top_artists):
    data = {
        "topTracks": [
            {
                "name": t["name"],
                "artist": t["artists"][0]["name"],
                "url": t["external_urls"]["spotify"],
                "image": t["album"]["images"][0]["url"],
            }
            for t in top_tracks
        ],
        "topArtists": [
            {
                "name": a["name"],
                "url": a["external_urls"]["spotify"],
                "image": a["images"][0]["url"] if a["images"] else None,
            }
            for a in top_artists
        ]
    }
    with open("tracks.js", "w", encoding="utf-8") as f:
        f.write(f"window.TRACKS = {json.dumps(data, indent=2)};")

if __name__ == "__main__":
    import base64
    access_token = get_access_token()
    tracks = fetch_top("tracks", access_token)
    artists = fetch_top("artists", access_token)
    generate_tracks_js(tracks, artists)
