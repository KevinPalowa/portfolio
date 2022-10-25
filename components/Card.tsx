import Link from "next/link";
type Props = {
  title: string;
  src: string;
  children: string;
  href: string;
};
export default function Card({ children, title, href = "/", src }: Props) {
  return (
    <Link href={href}>
      <a className="hover:scale-105 transition rounded-md border-4 border-slate-500 p-3 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-[#5e81ac]">{children}</p>
        </div>
        <div className="w-full rounded-lg">
          <img src={src} alt="pic" />
        </div>
        <p className="text-sm">See More...</p>
      </a>
    </Link>
  );
}
