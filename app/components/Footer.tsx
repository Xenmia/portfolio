import Image from "next/image";
import React from "react";
import logoUrl from "../pictures/logo.svg?url";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-background-light dark:bg-background-dark py-5 
    border-t-2 border-muted-light dark:border-muted-dark"
    >
      <p>© 2024 Maxim Banaga. All rights reserved.</p>
      <a href="/file.pdf" download="CV.pdf">
        Resume
      </a>
      <p className="flex flex-col justify-center">
        Let&apos;s colaborate! Reach out at{" "}
        <a
          href="mailto:banagamaxim13@gmail.com"
          className="text-primary-dark dark:text-primary-light"
        >
          banagamaxim13@gmail.com
        </a>
      </p>
      <p>Made with Next.js & coffee.</p>
      <Image src={logoUrl} alt="Logo" className="size-12" />
    </div>
  );
};

export default Footer;
