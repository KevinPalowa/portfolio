import { SiSpotify } from "react-icons/si";
import useSWR from "swr";

export default function NowPlaying() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/now-playing", fetcher);
  return (
    <div className="flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center mb-3">
      {/* <Image src={data?.albumImageUrl} alt="Album Pic" className="w-[50px]" /> */}
      <SiSpotify className="text-green-400" />
      <div className="ml-1  sm:flex">
        <p className="font-bold">
          {data?.isPlaying ? data.title : "Not Playing"}
        </p>
        <span className="mx-2 hidden sm:block">-</span>
        <p>{data?.isPlaying ? data.artist : "Spotify"}</p>
      </div>
      {/* <p className="ml-2 font-bold">{`${data.title} - ${data.artist}`}</p> */}
    </div>
  );
}
