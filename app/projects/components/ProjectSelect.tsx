"use client";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { useState, KeyboardEvent } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { StaticImageData } from "next/image";
import ProjectPresentation from "./ProjectPresentation";
import WeatherAppPreview from "../pictures/placeholder.webp";

type Project = {
  title: string;
  desc: string;
  href: string;
  preview?: string | StaticImageData;
};

const ProjectSelect = () => {
  const projects: Project[] = [
    {
      title: "Weather App" /** The title of the project */,
      desc: "This is a basic weather app with features such as: current weather, weather forecast, sunrise and sunset, moon phase etc." /** Used as the description of the project */,
      href: "/projects/weather" /** Used for href in next/link */,
      preview: WeatherAppPreview /** Project preview picture */,
    },
  ];
  const [[page, direction], setPage] = useState<number[]>([0, 0]);

  const classNameButton =
    "absolute z-2 bottom-2 -translate-y-1/2 max-sm:hidden bg-background-light/80 dark:bg-background-dark/80 text-text-light dark:text-text-dark cursor-pointer px-4 font-extrabold text-2xl hover:scale-105 border-primary-light active:scale-95 transition-all duration-300 ease-in ";

  const projectIndex = wrap(0, projects.length, page);
  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };
  const keyDown = (ev: KeyboardEvent<HTMLDivElement>) => {
    if (ev.code === "ArrowRight") {
      paginate(1);
    } else if (ev.code === "ArrowLeft") {
      paginate(-1);
    }
  };
  return (
    <>
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const threshold = 100;
            if (info.offset.x < -threshold) {
              paginate(1);
            } else if (info.offset.x > threshold) {
              paginate(-1);
            }
          }}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          variants={{
            enter: (dir: number) => ({
              opacity: 0.5,
              x: dir > 0 ? "100dvw" : dir < 0 ? "-100dvw" : 0,
            }),
            center: {
              opacity: 1,
              x: 0,
            },
            exit: (dir: number) => ({
              opacity: 0.5,
              x: dir < 0 ? "100dvw" : dir > 0 ? "-100dvw" : 0,
            }),
          }}
          tabIndex={0}
          autoFocus
          onKeyDown={(ev) => keyDown(ev)}
          className="h-full w-screen absolute flex flex-col shrink-0 p-2 "
        >
          <ProjectPresentation
            previewPicture={projects[projectIndex].preview}
            href={projects[projectIndex].href}
            title={projects[projectIndex].title}
            description={projects[projectIndex].desc}
          />
        </motion.div>
      </AnimatePresence>
      <button
        aria-label="Previous project"
        className={
          classNameButton + "left-1" + (projects.length === 1 ? " hidden" : "")
        }
        onClick={() => paginate(-1)}
      >
        <BiLeftArrow />
      </button>
      <button
        aria-label="Next project"
        className={
          classNameButton + "right-1" + (projects.length === 1 ? " hidden" : "")
        }
        onClick={() => paginate(1)}
      >
        <BiRightArrow />
      </button>
      <div
        className={
          "flex rounded-full p-1 gap-1 absolute z-2 bottom-1 left-[50dvw] -translate-1/2 bg-muted-light dark:bg-muted-dark " +
          (projects.length === 1 ? "hidden" : "")
        }
      >
        {projects.map((_, index) => (
          <button
            tabIndex={0}
            key={index}
            aria-label={"Go to slide " + (index + 1)}
            aria-current={index === page ? "true" : undefined}
            className={
              "rounded-full size-2 transition-all duration-150 ease-in-out hover:scale-115 cursor-pointer " +
              (index === projectIndex
                ? "bg-primary-light dark:bg-primary-dark scale-115"
                : "bg-muted-dark dark:bg-muted-light")
            }
            onClick={() => setPage([index, 0])}
          />
        ))}
      </div>
      <input onKeyDown={(ev) => keyDown(ev)} />
    </>
  );
};

export default ProjectSelect;
