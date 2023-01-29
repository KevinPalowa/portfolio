import Link from "next/link";
import NowPlaying from "../components/NowPlaying";

type Props = {
  href: string;
  children: string;
};
function FooterLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="block text-slate-500 dark:text-[#5e81ac] text-center"
    >
      {children}
    </Link>
  );
}
export default function Footer() {
  return (
    <footer>
      <hr className="border-1 border-[#5e81ac] my-5"></hr>
      <NowPlaying />
      <div className="flex relative bottom-0  w-full mb-5 justify-between">
        <div className="space-y-3">
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/about">About</FooterLink>
        </div>
        <div className="space-y-3">
          <FooterLink href="/works">Works</FooterLink>

          <FooterLink href="https://github.com/kevinpalowa">Github</FooterLink>
        </div>
        <div className="space-y-3">
          <FooterLink href="https://twitter.com/Kevinpalowa_">
            Twitter
          </FooterLink>
          <FooterLink href="https://www.instagram.com/kevin_palowa/">
            Instagram
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
