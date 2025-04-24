import React from "react";

const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center items-center bg-background-light dark:bg-background-dark py-5 
    border-t-2 border-muted-light dark:border-muted-dark"
    >
      <p>© 2024 Maxim Banaga. All rights reserved.</p>
      <ul className="flex flex-row gap-2 list-none text-secondary-light dark:text-secondary-light underline">
        <a href="/file.pdf" download="CV.pdf">
          Resume
        </a>
        <a href="https://github.com/Xenmia">GitHub</a>
        <a href="https://www.linkedin.com/in/maxim-banaga-38060433b/">
          LinkedIn
        </a>
        <a href="mailto:banagamaxim13@gmail.com">Email</a>
      </ul>
      <p>Made with Next.js & coffee.</p>
      <div className="size-14 mt-2 bg-[url(./pictures/logo-light.svg)] dark:bg-[url(./pictures/logo-dark.svg)] bg-size-[48px] bg-no-repeat bg-center" />
    </div>
  );
};

export default Footer;
