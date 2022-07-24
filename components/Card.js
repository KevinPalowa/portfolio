import Link from "next/link";
import Image from "next/image";
export default function Card({ children, title, href = "/", src }) {
  return (
    <Link href={href}>
      <a className="hover:scale-105 transition rounded-md border border-slate-500 p-3 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-[#5e81ac]">{children}</p>
        </div>
        <div className="w-full rounded-lg">
          <img src={src} layout="fill" alt="pic" />
        </div>
        <p>See More</p>
      </a>
    </Link>
  );
}
