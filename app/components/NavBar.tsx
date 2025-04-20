import Link from "next/link";
import React from "react";
import ThemeToggle from "./ButtonToggleTheme";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky justify-center items-center w-full h-fit p-2">
      <ul
        className="flex gap-4 text-t-light dark:text-t-dark justify-center text-2xl w-fit *:hover:text-interactive-light *:dark:hover:text-interactive-light
      *:transition-all *:duration-250 *:ease-in-out"
      >
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
