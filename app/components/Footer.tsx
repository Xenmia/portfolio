import Image from "next/image";
import React from "react";
import logoUrl from "../pictures/logo.svg?url";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-elements-light py-5 dark:bg-elements-dark">
      <p>© 2024 Maxim Banaga. All rights reserved.</p>
      <a href="/file.pdf" download="CV.pdf">
        Resume
      </a>
      <p>
        Let&apos;s colaborate! Reach out at{" "}
        <a href="mailto:banagamaxim13@gmail.com">banagamaxim13@gmail.com</a>
      </p>
      <p>Made with Next.js & coffee.</p>
      <Image src={logoUrl} alt="Logo" className="absolute right-5 size-12" />
    </div>
  );
};

export default Footer;
