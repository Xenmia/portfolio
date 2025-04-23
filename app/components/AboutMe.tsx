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
    <div
      className="flex m-5 rounded-[2rem] min-h-80 h-1/2 overflow-hidden border-2 
    border-border-light dark:border-border-dark bg-elements-light dark:bg-elements-dark shadow-2xl"
    >
      <Image alt="Portrait Picture" src={Portrait} className="" />
      <div
        className="flex flex-col justify-evenly border-r-2 
      border-border-light dark:border-border-dark text-t-light dark:text-t-dark"
      >
        <div className="border-b-2 border-border-light dark:border-border-dark">
          <h1 className={"text-4xl p-4 w-fit" + kanit.className}>
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
        <div className="">
          <h1 className={"text-4xl p-4 w-fit " + kanit.className}>Passions</h1>
          <h2 className={"text-xl p-4 " + inter.className}>
            I thrive at the intersection of logic and creativity—whether I’m
            building pixel-perfect interfaces, optimizing PC hardware, or
            dissecting algorithms for fun. Game development taught me to think
            in systems, while my love for art and nature keeps my designs
            human-centered. Always learning, always tinkering.
          </h2>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/3 text-t-light dark:text-t-dark">
        <ul className={"p-4 " + kanit.className}>
          <h1 className="text-4xl pb-2">Skills: </h1>
          {skills.map((skill, index) => (
            <li key={index} className="list-none text-xl py-2">
              <span
                className="flex flex-row justify-between items-center hover:translate-x-1 
              hover:text-interactive-light dark:hover:text-interactive-dark cursor-default"
              >
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
