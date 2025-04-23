import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectPreview from "./components/ProjectPreview";

export default function Home() {
  return (
    <div
      className="flex flex-col bg-primary-light dark:bg-primary-dark bg-[image:var(--gradient-bg-light)] 
      dark:bg-[image:var(--gradient-bg-dark)] bg-size-[40px_40px] bg-center bg-repeat"
    >
      <Hero />
      <AboutMe />
      <div className="flex flex-row">
        <ProjectPreview />
        <ContactMe />
      </div>
      <Footer />
    </div>
  );
}
