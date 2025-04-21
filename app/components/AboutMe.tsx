import Image from "next/image";
import React from "react";
import Portrait from "../pictures/Portrait_Placeholder.png";

const AboutMe = () => {
  const aboutMe =
    "I’m a self-taught front-end developer with a passion for creating intuitive, user-centered interfaces. Though I don’t have a CS degree, I’ve immersed myself in modern web technologies—currently building projects with React, TypeScript, Next.js, and Tailwind CSS to sharpen my skills.";
  const myPassions =
    "I thrive at the intersection of logic and creativity—whether I’m building pixel-perfect interfaces, optimizing PC hardware, or dissecting algorithms for fun. Game development taught me to think in systems, while my love for art and nature keeps my designs human-centered. Always learning, always tinkering.";
  const skillsFrontEnd = [
    "HTML/CSS",
    "React.js",
    "Next.js (Learning)",
    "Tailwind CSS",
    "Git",
    "Linux CLI",
    "VS Code",
  ];
  return (
    <div className="flex m-10 rounded-[2rem] min-h-80 h-1/2 overflow-hidden border-2 border-border-light dark:border-border-dark bg-elements-light dark:bg-elements-dark shadow-2xl">
      <Image alt="Portrait Picture" src={Portrait} className="" />
      <div className="flex flex-col justify-evenly border-r-2 border-border-light dark:border-border-dark text-t-light dark:text-t-dark">
        <div className="border-b-2 border-border-light dark:border-border-dark">
          <h1 className="text-4xl p-4 w-fit">Maxim Banaga</h1>
          <h2 className="text-xl p-4">{aboutMe}</h2>
        </div>
        <div className="">
          <h1 className="text-4xl p-4 w-fit">Passions</h1>
          <h2 className="text-xl p-4">{myPassions}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center w-1/3 text-t-light dark:text-t-dark">
        <ul className="p-4">
          <h1 className="text-4xl pb-2">Skills: </h1>
          {skillsFrontEnd.map((skill, index) => (
            <li key={index} className="list-none text-xl py-2">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
