import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="dark:bg-[#d08770] bg-[#B48EAD] px-2 py-2 rounded-md focus:outline-none dark:focus:border-light-primary"
      aria-label="Theme toggle button"
    >
      {mounted &&
        (theme === "dark" ? (
          <SunIcon className="text-[#eceff4] w-[20px]" />
        ) : (
          <MoonIcon className="text-[#eceff4] w-[20px]" />
        ))}
    </button>
  );
}
