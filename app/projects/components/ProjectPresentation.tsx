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
  address: string;
  /** Project description */
  description: string;
  /** Maximum length for truncated description (default: 400 chars) */
  maxDescriptionLength?: number;
}

const ProjectPresentation: React.FC<Props> = ({
  previewPicture = PlaceholderPicture,
  title,
  address,
  description,
  maxDescriptionLength = 400,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncated = description.length > maxDescriptionLength;
  const displayText =
    isExpanded || !truncated
      ? description
      : description.slice(0, maxDescriptionLength) + "...";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col md:flex-row bg-background-light dark:bg-background-dark rounded-2xl shadow-lg overflow-hidden h-full"
    >
      <motion.a
        href={address}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative w-full md:w-1/2 h-48 md:h-auto"
      >
        <Image
          src={previewPicture}
          alt={`${title} preview`}
          fill
          className="object-cover"
          placeholder="blur"
        />
      </motion.a>

      <div className="flex flex-col justify-between p-4 w-full md:w-1/2">
        <motion.h2
          layout
          className="text-xl md:text-2xl font-bold text-text-light dark:text-text-dark mb-2"
        >
          {title}
        </motion.h2>

        <motion.p
          layout
          className="text-base md:text-lg text-text-light dark:text-text-dark flex-1"
        >
          {displayText}
          {truncated && (
            <button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="text-primary-dark dark:text-primary-light ml-2 underline"
            >
              {isExpanded ? "Show Less" : "Read More"}
            </button>
          )}
        </motion.p>

        <motion.a
          href={address}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 5 }}
          className="mt-4 inline-block text-center text-primary-dark dark:text-primary-light border-2 border-primary-dark dark:border-primary-light px-4 py-2 rounded-full"
        >
          Visit Project
        </motion.a>
      </div>
    </motion.article>
  );
};

export default ProjectPresentation;
