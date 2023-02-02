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
      className="dark:bg-[#d08770] bg-[#B48EAD] px-2 py-2 rounded-md focus:outline-none dark:focus:border-light-primary"
      aria-label="Theme toggle button"
    >
      <motion.div
        variants={variants}
        animate={theme === "dark" ? "in" : "exit"}
      >
        {mounted && theme === "dark" && (
          <SunIcon className="text-[#eceff4] w-[20px]" />
        )}
      </motion.div>
      <motion.div
        variants={variants}
        animate={theme === "light" ? "in" : "exit"}
      >
        {mounted && theme === "light" && (
          <MoonIcon className="text-[#eceff4] w-[20px]" />
        )}
      </motion.div>
    </button>
  );
}
