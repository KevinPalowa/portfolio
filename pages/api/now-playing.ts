import { NextApiRequest, NextApiResponse } from "next";
import queryString from "query-string";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
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
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getNowPlaying();
  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  } else if (response.status === 200) {
    const song = await response.json();
    const data = {
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((_artist: any) => _artist.name).join(", "),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images[0].url,
      songUrl: song.item.external_urls.spotify,
    };
    res.status(200).json(data);
  }
}
