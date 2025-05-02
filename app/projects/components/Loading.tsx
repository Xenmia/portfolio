"use client";
import { motion } from "framer-motion";

const Loading = () => {
  const loadingText = "Loading...".split("");

  return (
    <div
      className="size-[70dvw] md:size-[30dvh] flex flex-col items-center justify-center
      bg-background-light dark:bg-background-dark absolute right-1/2 bottom-1/2 translate-1/2"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "circInOut",
        }}
        className="size-20 border-4 border-secondary-light dark:border-secondary-dark dark:border-b-transparent border-b-transparent rounded-full"
      />
      <div className="flex pt-2">
        {loadingText.map((current, i) => (
          <motion.p
            key={i}
            custom={i}
            initial={{
              y: 10,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                repeat: Infinity,
                delay: i * 0.05,
                repeatDelay: 1.5,
              },
            }}
            className="text-xl text-center font-kanit text-muted-light dark:text-muted-dark"
          >
            {current}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Loading;
