"use client";
import { useRef, useState } from "react";
import { Kanit } from "next/font/google";
import Socials from "./Socials";

const kanit = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const ContactMe = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState<string>("");
  const [spanColor, setSpanColor] = useState<string>(
    "text-yellow-500 dark:text-yellow-300"
  );
  const classNameInput =
    "text-xl border-2 border-muted-light dark:border-muted-dark rounded-md p-1.5 ";
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending...");
    if (formRef.current) {
      const formData = new FormData(formRef.current);

      formData.append("access_key", "dc8f0b34-f00b-4c8b-8546-2e28c1e3e2e4");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSpanColor("text-green-800 dark:text-lime-400");
        setResult("Form Submitted Successfully");
        formRef.current.reset(); // TODO
      } else {
        console.log("Error", data);
        setSpanColor("text-red-800 dark:text-red-400");
        setResult(data.message);
      }
    }
  };

  return (
    <div
      className="flex flex-col flex-1/3 my-5 mr-5 p-4 border-muted-light dark:border-muted-dark border-2 rounded-2xl 
    bg-background-light dark:bg-background-dark shadow-2xl"
    >
      <h1 className={"text-4xl self-center " + kanit.className}>CONTACT ME</h1>
      <form
        onSubmit={onSubmit}
        ref={formRef}
        className="flex flex-col *:my-2 *:outline-0"
      >
        <h1 className="text-2xl">Name:</h1>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          required
          className={classNameInput}
        />
        <h1 className="text-2xl">Email</h1>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className={classNameInput}
        />
        <h1 className="text-2xl">Message</h1>
        <textarea
          name="message"
          placeholder="Your message"
          className={classNameInput + " resize-none"}
        />
        <button
          type="submit"
          className="p-1.5 border-2 font-bold border-muted-light dark:border-muted-dark bg-primary-light
          dark:bg-primary-dark rounded-md hover:scale-[101%] active:scale-95 cursor-pointer"
        >
          SEND
        </button>
      </form>
      <span className={"text-xl " + spanColor}>{result}</span>
      <Socials />
    </div>
  );
};

export default ContactMe;
