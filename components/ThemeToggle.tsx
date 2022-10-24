import { SunIcon, MoonIcon } from "@heroicons/react/outline";
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
      className="bg-[#d08770] px-2 py-2 rounded-md"
    >
      {mounted &&
        (theme === "dark" ? (
          <SunIcon className="text-[#eceff4] w-[16px]" />
        ) : (
          <MoonIcon className="w-[16px]" />
        ))}
    </button>
  );
}
