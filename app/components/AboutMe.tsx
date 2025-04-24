import Image from "next/image";
import React from "react";
import Portrait from "../pictures/Portrait_Placeholder.png";
import {
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandGit,
  TbBrandVisualStudio,
} from "react-icons/tb";

import { FaLinux } from "react-icons/fa";
import { Kanit, Inter } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const AboutMe = () => {
  const skills = [
    { text: "HTML/CSS", icon: <TbBrandTypescript /> },
    { text: "React.js", icon: <TbBrandReact /> },
    { text: "Next.js (Learning)", icon: <TbBrandNextjs /> },
    { text: "Tailwind CSS", icon: <TbBrandTailwind /> },
    { text: "Git", icon: <TbBrandGit /> },
    { text: "Linux CLI", icon: <FaLinux /> },
    { text: "VS Code", icon: <TbBrandVisualStudio /> },
  ];

  return (
    <div className="flex flex-col xl:flex-row m-5 h-1/2 gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Image
          alt="Portrait Picture"
          src={Portrait}
          className="rounded-2xl border-muted-light place-self-center dark:border-muted-dark border-2 size-[400px] h-auto md:max-h-[400px] md:min-w-[400px]"
        />
        <div
          className="flex flex-col justify-evenly
      text-text-light dark:text-text-dark gap-5"
        >
          <div
            className="border-2 border-muted-light dark:border-muted-dark rounded-2xl 
        bg-background-light dark:bg-background-dark"
          >
            <h1 className={"text-4xl p-4 w-fit " + kanit.className}>
              Maxim Banaga
            </h1>
            <h2 className={"text-xl p-4 " + inter.className}>
              I’m a self-taught front-end developer with a passion for creating
              intuitive, user-centered interfaces. Though I don’t have a CS
              degree, I’ve immersed myself in modern web technologies—currently
              building projects with <b>React</b>, <b>TypeScript</b>,{" "}
              <b>Next.js</b>, and <b>Tailwind CSS</b> to sharpen my skills.
            </h2>
          </div>
          <div
            className="border-2 border-muted-light dark:border-muted-dark rounded-2xl 
        bg-background-light dark:bg-background-dark"
          >
            <h1 className={"text-4xl p-4 w-fit " + kanit.className}>
              Passions
            </h1>
            <h2 className={"text-xl p-4 " + inter.className}>
              I thrive at the intersection of logic and creativity—whether I’m
              building pixel-perfect interfaces, optimizing PC hardware, or
              dissecting algorithms for fun. Game development taught me to think
              in systems, while my love for art and nature keeps my designs
              human-centered. Always learning, always tinkering.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full xl:w-1/3 h-fit place-self-center text-text-light dark:text-text-dark border-2 border-muted-light dark:border-muted-dark rounded-2xl bg-background-light dark:bg-background-dark">
        <h1 className="text-4xl pb-2">Skills:</h1>
        <ul
          className={`p-4 flex xl:flex-col flex-wrap justify-center xl:justify-start gap-4 ${kanit.className}`}
        >
          {skills.map((skill, index) => (
            <li key={index} className="list-none text-xl">
              <span className="flex gap-2 items-center whitespace-nowrap">
                {skill.text}
                {skill.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
