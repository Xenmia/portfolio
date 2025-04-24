import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectPreview from "./components/ProjectPreview";

export default function Home() {
  return (
    <div
      className="flex flex-col bg-background-light dark:bg-background-dark bg-[image:var(--gradient-bg-light)] 
      dark:bg-[image:var(--gradient-bg-dark)] bg-size-[40px_40px] bg-center bg-repeat text-text-light dark:text-text-dark"
    >
      <Hero />
      <AboutMe />
      <div className="flex flex-row mt-30">
        <ProjectPreview />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
