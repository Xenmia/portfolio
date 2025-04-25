import React from "react";
import { TbBrandLinkedin, TbBrandGithub } from "react-icons/tb";
import { PiTelegramLogoFill } from "react-icons/pi";
const Socials = () => {
  const socials = [
    {
      address: "https://www.linkedin.com/in/maxim-banaga-38060433b/",
      icon: <TbBrandLinkedin className="h-full w-full" />,
      name: "LinkedIn",
    },
    {
      address: "https://github.com/Xenmia",
      icon: <TbBrandGithub className="h-full w-full" />,
      name: "GitHub",
    },
    {
      address: "https://t.me/wxzwzy",
      icon: <PiTelegramLogoFill className="h-full w-full" />,
      name: "Telegram",
    },
  ];
  return (
    <div className="flex flex-row justify-evenly my-auto">
      {socials.map((social, index) => (
        <div key={index} className="flex gap-2 items-center">
          <a
            href={social.address}
            className={
              "flex flex-col h-auto w-16 p-2 bg-transparent items-center rounded-sm shadow-2xs hover:*:scale-105"
            }
          >
            {social.icon}
            <h1 className="lg:scale-0 mt-2 origin-top text-text-light dark:text-text-dark animate-bounce">
              {social.name}
            </h1>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Socials;
