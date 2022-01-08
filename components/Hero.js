import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex justify-between mt-5">
      <div>
        <h2 className="font-semibold text-3xl">Kevin Palowa</h2>
        <p className="">Frontend Programmer ( Javascript, HTML, CSS, React )</p>
        <p className="text-[#5e81ac] text-sm">
          Love music, games and all kinda computer thing
        </p>
      </div>
      <div className="border-2 border-[#bf616a] rounded-full w-20 h-20 bg-blue-100"></div>
    </div>
  );
}
