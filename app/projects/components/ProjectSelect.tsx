"use client";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const ProjectSelect = () => {
  const projects = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
  ];
  const classNameButton =
    "absolute z-2 top-1/2 -translate-y-1/2 bg-background-light/70 dark:bg-background-dark/70 text-text-light dark:text-text-dark cursor-pointer p-4 font-extrabold text-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in ";

  const [[page, direction], setPage] = useState<number[]>([0, 0]);
  const projectIndex = wrap(0, projects.length, page);
  const paginate = (newDirection: number) =>
    setPage([page + newDirection, newDirection]);

  return (
    <>
      <AnimatePresence>
        <motion.div
          key={page}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          variants={{
            enter: (dir) => ({ x: dir > 0 ? 1000 : -1000, opacity: 0 }),
            center: { x: 0, opacity: 1 },
            exit: (dir) => ({ x: dir < 0 ? 1000 : -1000, opacity: 0 }),
          }}
          className="h-full w-screen absolute flex justify-center shrink-0 items-center text-4xl font-extrabold text-text-light dark:text-text-dark bg-amber-600"
        >
          {projects[projectIndex]}
        </motion.div>
      </AnimatePresence>
      <button
        className={classNameButton + "left-1"}
        onClick={() => paginate(-1)}
      >
        <BiLeftArrow />
      </button>
      <button
        className={classNameButton + "right-1"}
        onClick={() => paginate(1)}
      >
        <BiRightArrow />
      </button>
    </>
  );
};

export default ProjectSelect;
