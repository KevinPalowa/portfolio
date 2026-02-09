import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "../data/content";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="#hero"
          className="text-lg font-semibold tracking-wide text-slate-900 dark:text-white"
        >
          Kevin Palowa
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.3em] text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="hidden rounded-full border border-teal-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-teal-600 transition hover:bg-teal-400 hover:text-white dark:text-teal-200 sm:block"
          >
            Let&apos;s talk
          </a>
          <button
            className="rounded-full border border-slate-300 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:border-white/20 dark:text-white md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            Menu
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 transition dark:border-white/10 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-[0.3em] text-slate-700 dark:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
