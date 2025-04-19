"use client";
import { useState, useEffect } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark((previous) => !previous);
  };

  return (
    <button
      className="absolute right-2 flex flex-row cursor-pointer transition-all duration-150 ease-in-out
       bg-elements-light dark:bg-elements-dark rounded-lg border-2 border-border-light dark:border-border-dark 
       hover:bg-interactive-light dark:hover:bg-interactive-dark hover:scale-110 active:scale-90"
      onClick={handleThemeToggle}
    >
      {!isDark ? (
        <CiLight size="2em" className="dark:[visibility:hidden]" />
      ) : (
        <CiDark
          size="2em"
          className="[visibility:hidden] dark:visible"
          color="#F9F9F9"
        />
      )}
    </button>
  );
};

export default ThemeToggle;

{
  /* */
}

{
  /* <button
      className="absolute right-2 flex flex-row cursor-pointer transition-all duration-150 ease-in-out
       bg-elements-light dark:bg-elements-dark rounded-lg border-2 border-border-light dark:border-border-dark 
       hover:bg-interactive/50 hover:scale-110 active:scale-90"
      onClick={handleThemeToggle}
    >
      {isDark ? (
        <span className="flex flex-row">
          <CiLight size="1.5em" className="" />
          <CiDark size="1.5em" color="#F9F9F9" />
        </span>
      ) : (
        <span className="flex flex-row">
          <CiLight size="1.5em" />
          <CiDark size="1.5em" color="#F9F9F9" />
        </span>
      )}
    </button> */
}
