import { SiSpotify } from "react-icons/si";
import useSWR from "swr";
import { SpotifyResponse } from "../types/spotify";

export default function NowPlaying() {
  const fetcher = (url: string): Promise<SpotifyResponse> =>
    fetch(url).then((r) => r.json());
  const { data, isLoading } = useSWR("/api/now-playing", fetcher);
  return (
    <div className="flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center mb-3">
      <SiSpotify className="text-green-400" />
      {!isLoading && data ? (
        <div className="sm:ml-2  sm:flex">
          <p className="font-bold">
            {data.isPlaying ? data.title : "Not Playing"}
          </p>
          <span className="mx-2 hidden sm:block">-</span>
          <p>{data.isPlaying ? data.artist : "Spotify"}</p>
        </div>
      ) : (
        <div className="ml-1 flex space-x-3">
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-24 animate-pulse"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-24 animate-pulse"></div>
        </div>
      )}
    </div>
  );
}
