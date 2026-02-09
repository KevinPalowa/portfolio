import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const variants = {
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme =
    theme === "system" ? resolvedTheme ?? "light" : theme ?? "light";
  const isDark = currentTheme === "dark";

  const handleToggle = () => {
    if (!mounted) return;
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      className="rounded-full border border-slate-300 px-3 py-2 text-slate-800 transition hover:border-teal-400 focus:outline-none disabled:opacity-40 dark:border-white/10 dark:text-white"
      aria-label="Theme toggle button"
      disabled={!mounted}
    >
      <motion.div
        variants={variants}
        animate={mounted && isDark ? "enter" : "exit"}
        initial={false}
      >
        {mounted && isDark && <SunIcon className="h-5 w-5 text-amber-300" />}
      </motion.div>
      <motion.div
        variants={variants}
        animate={mounted && !isDark ? "enter" : "exit"}
        initial={false}
      >
        {mounted && !isDark && <MoonIcon className="h-5 w-5 text-slate-800" />}
      </motion.div>
    </button>
  );
}
