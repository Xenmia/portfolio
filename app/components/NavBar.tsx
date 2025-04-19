import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="sticky justify-center items-center w-full">
      <ul className="flex gap-4 text-amber-100 justify-center text-2xl">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contacts">Contacts</Link>
      </ul>
    </div>
  );
};

export default NavBar;
