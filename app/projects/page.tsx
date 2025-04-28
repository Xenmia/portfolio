import Background from "../components/Background";
import ProjectSelect from "./components/ProjectSelect";

const Projects = () => {
  return (
    <div className="flex h-full w-screen overflow-hidden relative text-text-light dark:text-text-dark ">
      <Background />

      <ProjectSelect />
    </div>
  );
};

export default Projects;
