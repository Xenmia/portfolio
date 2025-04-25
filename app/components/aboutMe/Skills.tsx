"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TbBrandTypescript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandGit,
  TbBrandVisualStudio,
} from "react-icons/tb";
import { FaLinux } from "react-icons/fa";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const Skills = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: "var(--x-start)",
      y: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0,
        ease: "easeInOut",
      },
    },
  };
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      className="flex flex-col items-center w-full py-5 xl:w-1/3 h-fit place-self-center 
      text-text-light dark:text-text-dark border-2 sm:[--x-start:90] max-sm:[--x-start:0]
      border-muted-light dark:border-muted-dark rounded-2xl bg-background-light dark:bg-background-dark"
    >
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
    </motion.div>
  );
};

export default Skills;
