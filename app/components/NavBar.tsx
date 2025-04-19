import Link from "next/link";
import React from "react";
import ThemeToggle from "./ButtonToggleTheme";

const NavBar = () => {
  return (
    <div className="flex flex-row sticky justify-center items-center w-full h-fit p-2">
      <ul className="flex gap-4 text-t-light dark:text-t-dark justify-center text-2xl w-fit">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contacts</Link>
      </ul>
      <ThemeToggle />
    </div>
  );
};

export default NavBar;
