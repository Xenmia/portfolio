"use client";
import React from "react";
import { motion } from "framer-motion";

const Passions = () => {
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
      viewport={{ once: true, amount: 0.8 }}
      variants={variants}
      className="border-2 border-muted-light dark:border-muted-dark rounded-2xl bg-background-light dark:bg-background-dark sm:[--y-start:90] max-sm:[--y-start:0]"
    >
      <h1 className="text-4xl p-4 w-fit font-kanit">Passions</h1>
      <h2 className="text-xl p-4 font-inter">
        I thrive at the intersection of logic and creativity—whether I’m
        building pixel-perfect interfaces, optimizing PC hardware, or dissecting
        algorithms for fun. Game development taught me to think in systems,
        while my love for art and nature keeps my designs human-centered. Always
        learning, always tinkering.
      </h2>
    </motion.div>
  );
};

export default Passions;
