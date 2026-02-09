import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const variants = {
    in: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="rounded-full border border-slate-300 px-3 py-2 text-slate-800 transition hover:border-teal-400 focus:outline-none dark:border-white/10 dark:text-white"
      aria-label="Theme toggle button"
    >
      <motion.div
        variants={variants}
        animate={theme === "dark" ? "in" : "exit"}
      >
        {mounted && theme === "dark" && (
          <SunIcon className="h-5 w-5 text-amber-300" />
        )}
      </motion.div>
      <motion.div
        variants={variants}
        animate={theme === "light" ? "in" : "exit"}
      >
        {mounted && theme === "light" && (
          <MoonIcon className="h-5 w-5 text-slate-800" />
        )}
      </motion.div>
    </button>
  );
}
