import Link from "next/link";
import React from "react";
import ThemeToggle from "./ButtonToggleTheme";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky justify-center items-center w-full h-fit p-2 top-0 bg-background-light dark:bg-background-dark border-b-2 border-muted-light dark:border-muted-dark">
      <ul className="flex gap-4 text-text-light dark:text-text-dark justify-center text-2xl w-fit *:hover:text-secondary-light *:dark:hover:text-secondary-dark">
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
