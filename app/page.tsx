import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectPreview from "./components/ProjectPreview";

export default function Home() {
  return (
    <div
      className="flex flex-col bg-background-light dark:bg-background-dark 
      bg-[url(./pictures/pattern-light.png)] dark:bg-[url(./pictures/pattern-dark.png)] 
      bg-center bg-repeat text-text-light dark:text-text-dark"
    >
      <Hero />
      <AboutMe />
      <div className="flex lg:flex-row flex-col my-30 ">
        <ProjectPreview />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
