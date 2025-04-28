"use client";
import React from "react";
import { motion } from "framer-motion";

const DescriptionMe = () => {
  const variants = {
    hidden: {
      opacity: 0,
      y: "var(--y-start)",
      x: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: 0,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className="border-2 border-muted-light dark:border-muted-dark rounded-2xl bg-background-light dark:bg-background-dark sm:[--y-start:-90] max-sm:[--y-start:0]"
    >
      <h1 className={"text-4xl p-4 w-fit font-kanit"}>Maxim Banaga</h1>
      <h2 className={"text-xl p-4 font-inter"}>
        I’m a self-taught front-end developer with a passion for creating
        intuitive, user-centered interfaces. Though I don’t have a CS degree,
        I’ve immersed myself in modern web technologies—currently building
        projects with <b>React</b>, <b>TypeScript</b>, <b>Next.js</b>, and{" "}
        <b>Tailwind CSS</b> to sharpen my skills.
      </h2>
    </motion.div>
  );
};

export default DescriptionMe;
