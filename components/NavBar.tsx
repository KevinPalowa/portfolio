import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import ThemeToggle from "./ThemeToggle";
type Props = { href: string; children: string };
function NavLink({ href, children }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href}>
      <a
        className={
          isActive
            ? "dark:text-[#eceff4] text-[#2e3440]"
            : "hover:dark:text-[#eceff4] hover:text-[#2e3440] text-slate-500 dark:text-[#5e81ac]"
        }
      >
        {children}
      </a>
    </Link>
  );
}
export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="flex justify-between py-4">
      {/* <Link href="/">
        <a className="font-semibold text-xl">Kevin</a>
      </Link> */}
      <ul className="flex hidden sm:flex space-x-5 text-lg">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/works">Works</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/post">Posts</NavLink>
      </ul>
      <div className="space-x-2 ml-auto">
        <ThemeToggle />
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-[#eceff4] px-2 py-2 sm:hidden rounded-md"
        >
          <GoThreeBars className="w-[16px]" />
        </button>
        {isActive ? (
          <div className="bg-gray-500 flex flex-col p-3 w-1/3 fixed right-5 rounded-md top-16 space-y-2">
            <Link href="/">Home</Link>
            <Link href="/works">Works</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
