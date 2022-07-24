const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token =
  "AQDCV4h7F8KZdIMCwBN7UJQNi2rqpiPFaJ8n-7HuoN_FELPJe52Q_AtparhLGgyT5VlAB-V00ESBZKa_RtfuoY-WvnWob8iwcV-Hy841NtSCI2goAAH7p4sNnL1EoJYNEig";

const basic =
  "NWIyMjRkYjIzZTJiNDRjOWI3YTlkNDhkODkxMTdjNzc6M2NmNGEyYjdmZGJlNDY2YTg5ZjcwZDFhZGM0ZTAxNDk=";
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => res.json());
};

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken();

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
