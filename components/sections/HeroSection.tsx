import { motion } from "framer-motion";
import Link from "next/link";
import { heroContent } from "../../data/content";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const {
    eyebrow,
    title,
    subtitle,
    description,
    primaryAction,
    secondaryAction,
    highlights,
  } = heroContent;

  return (
    <section
      id="hero"
      className="pb-16 pt-20 text-left md:flex md:flex-col md:items-start"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
        variants={containerVariants}
        className="space-y-6"
      >
        <span className="text-sm uppercase tracking-[0.4em] text-teal-500/80 dark:text-teal-300/80">
          {eyebrow}
        </span>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white md:text-6xl">
            {title}
          </h1>
          <p className="text-2xl font-medium text-slate-700 dark:text-slate-200 md:text-3xl">
            {subtitle}
          </p>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={primaryAction.href}
            className="rounded-full bg-teal-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-teal-500/40 transition hover:-translate-y-0.5 hover:bg-teal-400"
          >
            {primaryAction.label}
          </Link>
          <Link
            href={secondaryAction.href}
            className="rounded-full border border-slate-600 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            {secondaryAction.label}
          </Link>
        </div>
        <div className="grid gap-4 pt-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-2xl border border-slate-200 bg-white/60 p-4 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-300">
                Insight
              </p>
              <p className="mt-2 text-base text-slate-900 dark:text-white">
                {highlight}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
