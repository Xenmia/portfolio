import React from "react";
import ScrollReveal from "./ScrollReveal";

const Hero = () => {
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
      quote: "Whether you think you can or you think you can't, you're right.",
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

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    //
    <ScrollReveal
      direction="left"
      amount={0.8}
      once={false}
      className="flex flex-col w-screen md:mx-32 mx-6 my-32"
    >
      <div className="bg-background-light dark:bg-background-dark p-4 w-fit shadow-2xl border-2 border-muted-light dark:border-muted-dark">
        <h1 className="text-4xl">{randomQuote.quote}</h1>
        <h1 className="text-xl text-subtext-light dark:text-subtext-dark">
          {randomQuote.author}
        </h1>
      </div>
    </ScrollReveal>
  );
};

export default Hero;
