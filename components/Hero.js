import Image from "next/image";

export default function Hero() {
  return (
    <div className="space-y-3 mt-14">
      <div className="flex-col md:flex-row  flex mt-5 justify-between space-y-3">
        <div className="flex-grow-1">
          <h2 className="font-bold text-3xl">Kevin Palowa</h2>
          <p className="text-lg">
            Frontend Programmer ( Javascript, HTML, CSS, React )
          </p>
          <p className="text-[#5e81ac] text-sm">
            Love music, games and all kinda computer thing
          </p>
        </div>
        <div className="relative w-[100px] items-center h-[100px] border-[#d08770] mx-auto border-2 rounded-full">
          <Image
            src="/images/profile.jpeg"
            layout="fill"
            className="rounded-full "
            alt="profile"
          />
        </div>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-800 rounded-md p-3 mt-5 text-center">
        <p>Hello, I&apos;m an React developer and Linux enthusiast</p>
      </div>
    </div>
  );
}
