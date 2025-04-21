import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] **:transition-all **:duration-150 **:ease-in-out bg-primary-light dark:bg-primary-dark">
      <AboutMe />
    </div>
  );
}
