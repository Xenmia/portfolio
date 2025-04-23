import React from "react";
import projectPreview from "../pictures/projectPreview.webp";
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
    <div className="flex flex-col flex-2/3 hover:scale-[101%] border-border-light dark:border-border-dark border-4 bg-elements-light dark:bg-elements-dark m-5 overflow-hidden origin-left rounded-4xl shadow-2xl">
      <a
        className=" decoration-t-light dark:decoration-t-dark"
        href="https://boanex.netlify.app/"
      >
        <Image
          src={projectPreview}
          alt="project preview"
          className="w-full h-auto border-b-2 border-border-light dark:border-border-dark"
        />
        <h1
          className={
            "text-4xl px-4 pt-2 text-t-light dark:text-t-dark " +
            kanit.className
          }
        >
          BOANEX
        </h1>
        <h1
          className={
            "text-2xl px-4 pt-2 text-subtext-light dark:text-subtext-dark" +
            inter.className
          }
        >
          Business website built with HTML/CSS under tight constraints.
        </h1>
      </a>
      <Link
        className="text-subtext-light dark:text-subtext-dark hover:underline text-2xl place-self-end px-4 pb-2"
        href="../projects"
        children="See more:"
      />
    </div>
  );
};

export default ProjectPreview;
