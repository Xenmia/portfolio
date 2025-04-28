"use client";
import mockup from "../pictures/boanex-mockup-dark.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectPreview = () => {
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      className="flex flex-col lg:flex-row h-fit self-end flex-2/3 border-muted-light dark:border-muted-dark border-2 
    bg-background-light dark:bg-background-dark overflow-hidden origin-left rounded-4xl shadow-2xl sm:[--x-start:-90]"
    >
      <a href="https://boanex.netlify.app/">
        <Image
          className="w-full lg:min-w-2/3 border-r-2 border-muted-light dark:border-muted-dark"
          alt="project preview"
          src={mockup}
        />
      </a>
      <div className="flex flex-col p-2">
        <a
          href="https://boanex.netlify.app/"
          className="*:underline-offset-4 hover:*:underline *:px-4 *:pt-2"
        >
          <h1 className="text-4xl text-text-light dark:text-text-dark font-kanit">
            BOANEX
          </h1>
          <h1 className="text-2xl text-muted-light dark:text-muted-dark font-semibold font-inter">
            Business website built with HTML/CSS under tight constraints.
          </h1>
        </a>
        <Link
          className="text-text-light dark:text-text-dark hover:underline text-4xl 
          lg:place-self-end mt-8 lg:mt-auto place-self-center lg:px-4 pb-2 
        hover:text-secondary-light dark:hover:text-secondary-dark font-kanit"
          href="../projects"
        >
          See more projects
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectPreview;
