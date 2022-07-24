import Link from "next/link";
import NowPlaying from "../components/NowPlaying";

function FooterLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="block text-slate-500 dark:text-[#5e81ac] text-center">
        {children}
      </a>
    </Link>
  );
}
export default function Footer() {
  return (
    <>
      <hr className="border-1 border-[#5e81ac] my-5"></hr>
      <NowPlaying />
      <div className="flex relative bottom-0  w-full mb-5 justify-between">
        <div className="space-y-3">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/works">Works</FooterLink>
        </div>
        <div className="space-y-3">
          <FooterLink href="/works">Twitter</FooterLink>
          <FooterLink href="https://github.com/kevinpalowa">Github</FooterLink>
          <FooterLink href="/works">Instagram</FooterLink>
        </div>
        <div className="space-y-3">
          <FooterLink href="/works">Youtube</FooterLink>
          <FooterLink href="/works">News</FooterLink>
          <FooterLink href="/works">About</FooterLink>
        </div>
      </div>
    </>
  );
}
