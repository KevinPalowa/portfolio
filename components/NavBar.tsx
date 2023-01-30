import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import ThemeToggle from "./ThemeToggle";
import { XIcon } from "@heroicons/react/solid";
type Props = { href: string; children: string };
function NavLink({ href, children }: Props) {
  const router = useRouter();
  const isActive = router.asPath === href;
  return (
    <Link
      href={href}
      className={
        isActive
          ? "dark:text-[#eceff4] text-[#2e3440]"
          : "hover:dark:text-[#eceff4] hover:text-[#2e3440] text-slate-500 dark:text-[#5e81ac]"
      }
    >
      {children}
    </Link>
  );
}
export default function NavBar() {
  const [isActive, setIsActive] = useState(false);
  const animations = {
    initial: { x: 100 },
    animate: { x: 0 },
    exit: { x: "100%" },
  };
  return (
    <nav className="flex justify-between py-4">
      {/* <Link href="/">
        <a className="font-semibold text-xl">Kevin</a>
      </Link> */}
      <ul className="hidden sm:flex space-x-5 text-lg">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/posts">Posts</NavLink>
      </ul>
      <div className="ml-auto">
        <ThemeToggle />
        <button
          onClick={() => setIsActive(!isActive)}
          className="bg-[#eceff4] px-2 py-2.5 sm:hidden rounded-md text-dark-primary ml-2"
        >
          <GoThreeBars className="w-[20px]" />
        </button>
        <motion.div
          className="dark:bg-[#3B4252] bg-white flex flex-col items-center justify-center p-3 space-y-2 z-40 fixed inset-0"
          variants={animations}
          transition={{ duration: 0.5 }}
          initial="initial"
          animate={isActive ? "animate" : "exit"}
          exit="exit"
        >
          <button
            onClick={() => setIsActive(false)}
            className="absolute right-2 top-0"
          >
            <XIcon className="text-[#000000] w-[20px]" />
          </button>
          <Link href="/">Home</Link>
          <Link href="/works">Works</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
        </motion.div>
      </div>
    </nav>
  );
}
