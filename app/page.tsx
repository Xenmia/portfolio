import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col bg-primary-light dark:bg-primary-dark">
      <NavBar />
      <AboutMe />
      <AboutMe />
      <AboutMe />
      <AboutMe />
    </div>
  );
}
