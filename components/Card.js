import Link from "next/link";

export default function Card({ children, title }) {
  return (
    <Link href="/">
      <a className="hover:scale-105 transition rounded-md border border-slate-500 p-3 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-[#5e81ac]">{children}</p>
        </div>
        <div className="w-full h-[130px] bg-red-100 rounded-lg"></div>
        <p>See More</p>
      </a>
    </Link>
  );
}
