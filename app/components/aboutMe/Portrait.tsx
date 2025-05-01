"use client";
import { motion } from "framer-motion";
import portraitPicture from "../../pictures/placeholder.png";
import Image from "next/image";

const Portrait = () => {
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
      viewport={{ once: true, amount: 0.5 }}
      variants={variants}
      className="lg:place-self-center sm:[--x-start:-90px] max-sm:[x-start:0px] size-[100px] md:size-[400px] h-auto md:max-h-[400px] md:min-w-[400px]"
    >
      <Image
        alt="Portrait Picture"
        src={portraitPicture}
        className="rounded-2xl border-muted-light dark:border-muted-dark place-self-start border-2 "
      />
    </motion.div>
  );
};

export default Portrait;
