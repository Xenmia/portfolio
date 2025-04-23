import Link from "next/link";
import React from "react";
import ThemeToggle from "./ButtonToggleTheme";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky justify-center items-center w-full h-fit p-2 top-0 bg-primary-light dark:bg-primary-dark border-b-2 border-border-light dark:border-border-dark">
      <ul className="flex gap-4 text-t-light dark:text-t-dark justify-center text-2xl w-fit *:hover:text-interactive-light *:dark:hover:text-interactive-light">
        <Link href="/" className="uppercase">
          Home
        </Link>
        <Link href="/projects" className="uppercase">
          Projects
        </Link>
        <Link href="/contact" className="uppercase">
          Contact
        </Link>
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
