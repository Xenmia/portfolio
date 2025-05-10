"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import PlaceholderPicture from "../pictures/placeholder.webp";

interface Props {
  /** URL or StaticImageData for preview picture */
  previewPicture?: string | StaticImageData;
  /** Project title */
  title: string;
  /** External link to project */
  href: string;
  /** Project description */
  description: string;
  /** Maximum length for truncated description (default: 400 chars) */
  maxDescriptionLength?: number;
}

const ProjectPresentation: React.FC<Props> = ({
  previewPicture = PlaceholderPicture,
  title,
  href,
  description,
  maxDescriptionLength = 400,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const truncated = description.length > maxDescriptionLength;
  const displayText =
    isExpanded || !truncated
      ? description
      : description.slice(0, maxDescriptionLength) + "...";

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col md:flex-row bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden h-full"
    >
      <motion.a
        href={href}
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.6, duration: 0.3 },
        }}
        className="relative w-full md:w-1/2 h-48 md:h-auto"
      >
        <Image
          aria-label="Project Preview Picture"
          src={previewPicture}
          alt={`${title} preview`}
          fill
          className="object-cover"
        />
      </motion.a>

      <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
        <motion.h2
          layout
          aria-label="Project Title"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.8, duration: 0.3 },
          }}
          className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark mb-2"
        >
          {title}
        </motion.h2>

        <motion.p
          layout
          aria-label="Project Description"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.3 },
          }}
          className="text-base md:text-lg text-text-light dark:text-text-dark flex-1"
        >
          {displayText}
          {truncated && (
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-primary-dark dark:text-primary-light ml-2 underline cursor-pointer"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </motion.p>

        <motion.a
          href={href}
          rel="noopener noreferrer"
          aria-label="Open project"
          whileHover={{ x: 5 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.2, duration: 0.3 },
          }}
          className="mt-4 inline-block text-center w-1/2 self-center text-primary-dark dark:text-primary-light border-2 border-primary-dark dark:border-primary-light px-4 py-2 rounded-xl"
        >
          Visit Project
        </motion.a>
      </div>
    </motion.article>
  );
};

export default ProjectPresentation;
