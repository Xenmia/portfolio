import Image from "next/image";
import React from "react";
import Portrait from "../pictures/Portrait_Placeholder.png";

const AboutMe = () => {
  return (
    <div className="flex gap-4 m-10 rounded-[2rem] overflow-hidden border-2 border-border-light dark:border-border-dark bg-elements-light dark:bg-elements-dark shadow-2xl">
      <Image alt="Portrait Picture" src={Portrait} className="" />
      <div className="flex flex-col justify-evenly text-t-light dark:text-t-dark">
        <h1 className="text-4xl">Maxim Banaga</h1>
        <h2 className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam
          tenetur quaerat nobis porro, in laborum molestiae, quo alias eligendi,
          officiis minima. Culpa nesciunt, numquam repellendus et dicta illum
          natus corporis modi commodi quidem blanditiis, velit aut, suscipit
          sit? Nobis officia perspiciatis placeat mollitia similique ad quod
          facere dolorum corrupti perferendis id soluta consequuntur eveniet,
          deleniti illum error repudiandae distinctio natus explicabo est odit
          dignissimos aliquid porro! Cupiditate animi alias blanditiis adipisci
          deserunt cumque voluptatibus dignissimos maxime inventore architecto,
          commodi nulla debitis incidunt iusto ad facilis, ut voluptate
          exercitationem quo et dicta suscipit, voluptates consequatur! Aut
          quibusdam porro eius deleniti?
        </h2>
      </div>
    </div>
  );
};

export default AboutMe;
