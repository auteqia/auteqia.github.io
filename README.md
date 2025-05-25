## TLDR A simple website that automaticly pulls the listened albums and displays it from a json file

It automaticly pulls all the albums listened in last.fm and search it in Spotify. Then, it take it's cover album, artist name, album name and add it to the `media-data.js` in json format.


> Note
> I first added the 500 albums manually then I automatized it with Github Actions and last.fm & Spotify API. Work in progress


## Fork

If you want to fork it, you juste have to change the four secrets (located in `update_albums.py`) :
- `LASTFM_USER = os.environ['LASTFM_USER']` -> your last.fm username
- `LASTFM_API_KEY = os.environ['LASTFM_API_KEY']` -> available after creating API account ([Here](https://www.last.fm/api/account/create))
- `SPOTIFY_CLIENT_ID = os.environ['SPOTIFY_CLIENT_ID']` -> available after creating a developper account ([Here](https://developer.spotify.com/documentation/web-api))
- `SPOTIFY_CLIENT_SECRET = os.environ['SPOTIFY_CLIENT_SECRET']` -> available after creating a developper account ([Here](https://developer.spotify.com/documentation/web-api))

You have to add the secrets environnement located in `<YourRepo> -> Settings -> Secrets and Variables -> Actions -> New Repository Secrets`.

Then add the variables above
