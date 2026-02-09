import { navigationLinks, socials } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white/80 transition dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Stay in touch
          </p>
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-200">
            {`© ${year} Kevin Palowa. Available for remote engagements.`}
          </p>
        </div>
        <nav className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-500 transition hover:text-teal-600 dark:text-slate-400 dark:hover:text-teal-300"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
