"use client";
import { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;
  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="absolute right-4 flex flex-row cursor-pointer
       bg-primary-light dark:bg-primary-dark rounded-lg border-2 border-muted-light dark:border-muted-dark 
       hover:bg-primary-light dark:hover:bg-primary-dark hover:scale-110 active:scale-90"
    >
      {resolvedTheme === "light" ? (
        <CiLight size="2em" className="dark:[visibility:hidden]" />
      ) : (
        <CiDark size="2em" className="visible " />
      )}
    </button>
  );
};

export default ThemeToggle;
