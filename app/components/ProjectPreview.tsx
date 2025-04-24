import React from "react";
import mockup from "../pictures/boanex-mockup-dark.webp";
import Image from "next/image";
import { Kanit, Inter } from "next/font/google";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

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
    <ScrollReveal
      direction="left"
      duration={0.5}
      amount={1}
      once={false}
      className="flex flex-col lg:flex-row flex-2/3 border-muted-light dark:border-muted-dark border-2 
    bg-background-light dark:bg-background-dark overflow-hidden origin-left rounded-4xl shadow-2xl"
    >
      <a href="https://boanex.netlify.app/">
        <Image
          className="w-full lg:min-w-2/3 border-r-2 border-muted-light dark:border-muted-dark"
          alt="project preview"
          src={mockup}
        />
      </a>
      <div className="flex flex-col h-full p-2">
        <a
          href="https://boanex.netlify.app/"
          className="*:underline-offset-4 hover:*:underline *:px-4 *:pt-2"
        >
          <h1
            className={
              "text-4xl text-text-light dark:text-text-dark " + kanit.className
            }
          >
            BOANEX
          </h1>
          <h1
            className={
              "text-2xl text-muted-light dark:text-muted-dark font-semibold " +
              inter.className
            }
          >
            Business website built with HTML/CSS under tight constraints.
          </h1>
        </a>
        <Link
          className="text-text-light dark:text-text-dark hover:underline text-4xl 
          lg:place-self-end mt-8 lg:mt-auto place-self-center lg:px-4 pb-2 
        hover:text-secondary-light dark:hover:text-secondary-dark "
          href="../projects"
        >
          See more projects
        </Link>
      </div>
    </ScrollReveal>
  );
};

export default ProjectPreview;
