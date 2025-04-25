"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [randomQuote, setRandomQuote] = useState<{
    quote: string;
    author: string;
  }>({ quote: "Meow", author: "Maxim" });

  useEffect(() => {
    const quotes = [
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      },
      {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
      },
      {
        quote: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
      },
      {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
      },
      {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu",
      },
      {
        quote: "That which does not kill us makes us stronger.",
        author: "Friedrich Nietzsche",
      },
      {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
      },
      {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra",
      },
      {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
      },
      {
        quote:
          "Whether you think you can or you think you can't, you're right.",
        author: "Henry Ford",
      },
      {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
      },
      {
        quote:
          "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
      },
      {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
      },
      {
        quote: "If you're going through hell, keep going.",
        author: "Winston Churchill",
      },
      {
        quote:
          "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain",
      },
    ];

    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

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
      className="flex flex-col sm:[--x-start:-90px] max-sm:[x-start:0px] md:mx-32 mx-6 my-32 bg-background-light dark:bg-background-dark
       p-4 w-fit shadow-2xl border-2 border-muted-light dark:border-muted-dark"
    >
      {randomQuote ? (
        <>
          <h1 className="text-4xl text-text-light dark:text-text-dark">
            {randomQuote.quote}
          </h1>
          <h1 className="text-xl text-subtext-light dark:text-subtext-dark">
            {randomQuote.author}
          </h1>
        </>
      ) : (
        <h1 className="text-4xl">Loading...</h1>
      )}
    </motion.div>
  );
};

export default Hero;
