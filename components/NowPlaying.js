import useSWR from "swr";
import { useEffect } from "react";
import { SiSpotify } from "react-icons/si";
import Image from "next/image";

export default function NowPlaying() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/now-playing", fetcher);

  console.log(data);
  return (
    <div className="flex flex-row-reverse sm:flex-row justify-between sm:justify-start items-center mb-3">
      {/* <Image src={data?.albumImageUrl} alt="Album Pic" className="w-[50px]" /> */}
      <SiSpotify className="text-green-400" />
      <div className="ml-1  sm:flex">
        <p className="font-bold">{data ? data.title : "Not Playing"}</p>
        <span className="mx-2 hidden sm:block">-</span>
        <p>{data ? data.artist : "Spotify"}</p>
      </div>
      {/* <p className="ml-2 font-bold">{`${data.title} - ${data.artist}`}</p> */}
    </div>
  );
}
