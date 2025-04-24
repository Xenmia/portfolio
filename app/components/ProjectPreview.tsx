import React from "react";
import mockup from "../pictures/boanex-mockup-dark.webp";
import Image from "next/image";
import { Kanit, Inter } from "next/font/google";
import Link from "next/link";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const ProjectPreview = () => {
  return (
    <div
      className="flex flex-col flex-2/3 border-muted-light dark:border-muted-dark border-2 
    bg-background-light dark:bg-background-dark overflow-hidden origin-left rounded-4xl shadow-2xl"
    >
      <a
        className="decoration-text-light dark:decoration-text-dark flex flex-col lg:flex-row"
        href="https://boanex.netlify.app/"
      >
        <Image
          className="w-full lg:min-w-2/3 border-2 border-muted-light dark:border-muted-dark"
          alt="project preview"
          src={mockup}
        />
        <div className="flex flex-col *:px-4 *:pt-2 *:underline-offset-4 hover:*:underline">
          <h1
            className={
              "text-4xl text-text-light dark:text-text-dark " + kanit.className
            }
          >
            BOANEX
          </h1>
          <h1
            className={
              "text-2xl text-text-light dark:text-text-dark font-semibold " +
              inter.className
            }
          >
            Business website built with HTML/CSS under tight constraints.
          </h1>
        </div>
      </a>
      <Link
        className="text-text-light dark:text-text-dark hover:underline text-4xl 
        lg:place-self-end my-auto place-self-center lg:px-4 pb-2 
        hover:text-secondary-light dark:hover:text-secondary-dark "
        href="../projects"
      >
        See more projects
      </Link>
    </div>
  );
};

export default ProjectPreview;
