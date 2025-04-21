import Link from "next/link";
import React from "react";
import ThemeToggle from "./ButtonToggleTheme";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky justify-center items-center w-full h-fit p-2 top-0 bg-primary-light dark:bg-primary-dark border-b-2 border-border-light dark:border-border-dark">
      <ul className="flex gap-4 text-t-light dark:text-t-dark justify-center text-2xl w-fit *:hover:text-interactive-light *:dark:hover:text-interactive-light">
        <Link href="/">HOME</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/contact">CONTACT</Link>
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
