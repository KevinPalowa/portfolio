import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggle from "./ThemeToggle";
function NavLink({ href, children }) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link href={href}>
      <a
        className={
          isActive
            ? "dark:text-[#eceff4] text-[#2e3440]"
            :  "hover:dark:text-[#eceff4] hover:text-[#2e3440] text-slate-500 dark:text-[#5e81ac]"
        }
      >
        {children}
      </a>
    </Link>
  );
}
export default function NavBar() {
  return (
    <nav className="flex justify-between mt-5">
      {/* <Link href="/">
        <a className="font-semibold text-xl">Kevin</a>
      </Link> */}
      <ul className="flex space-x-5 text-lg">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/works">Works</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/post">Posts</NavLink>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
