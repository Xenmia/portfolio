import AboutMe from "./components/AboutMe";
import Background from "./components/Background";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectPreview from "./components/ProjectPreview";
import ScrollTrack from "./components/ScrollTrack";

export default function Home() {
  return (
    <div className="flex flex-col text-text-light dark:text-text-dark">
      <Background />
      <Hero />
      <AboutMe />
      <div className="flex lg:flex-row flex-col my-30 mx-4 gap-8 lg:mx-16 lg:gap-16 justify-between">
        <ProjectPreview />
        <ContactMe />
      </div>
      <Footer />
      <ScrollTrack />
    </div>
  );
}
