import React from "react";
import projectPreview from "../pictures/projectPreview.webp";
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
    <div className="flex flex-col flex-2/3 border-border-light dark:border-border-dark border-2 bg-elements-light dark:bg-elements-dark m-5 overflow-hidden origin-left rounded-4xl shadow-2xl">
      <a
        className="decoration-t-light dark:decoration-t-dark flex"
        href="https://boanex.netlify.app/"
      >
        <Image
          src={mockup}
          alt="project preview"
          className="w-2/3 border-b-2 hover:scale-[101%] origin-top-left border-border-light dark:border-border-dark"
        />
        <div className="flex flex-col w-1/3 *:px-4 *:pt-2 *:underline-offset-4 hover:*:underline">
          <h1
            className={
              "text-4xl text-t-light dark:text-t-dark " + kanit.className
            }
          >
            BOANEX
          </h1>
          <h1
            className={
              "text-2xl text-subtext-light dark:text-subtext-dark" +
              inter.className
            }
          >
            Business website built with HTML/CSS under tight constraints.
          </h1>
        </div>
      </a>
      <Link
        className="text-interactive-light dark:text-interactive-dark hover:underline text-4xl place-self-end my-auto px-4 pb-2"
        href="../projects"
        children="See more projects"
      />
    </div>
  );
};

export default ProjectPreview;
