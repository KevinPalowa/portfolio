interface BaseSpotifyResponse {
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
}

export type SpotifyResponse =
  | (BaseSpotifyResponse & { isPlaying: true })
  | { isPlaying: false };
