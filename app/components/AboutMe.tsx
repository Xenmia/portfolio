import Portrait from "./aboutMe/Portrait";
import DescriptionMe from "./aboutMe/DescriptionMe";
import Passions from "./aboutMe/Passions";
import Skills from "./aboutMe/Skills";

const AboutMe = () => {
  return (
    <div className="flex flex-col xl:flex-row my-5 mx-4 lg:mx-16 h-1/2 gap-8 lg:gap-16">
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        <Portrait />
        <div
          className="flex flex-col justify-evenly
        text-text-light dark:text-text-dark gap-5"
        >
          <DescriptionMe />
          <Passions />
        </div>
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
