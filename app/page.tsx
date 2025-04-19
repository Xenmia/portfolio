import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="flex w-[100vw] h-[100vh] bg-primary-light dark:bg-primary-dark transition-all duration-150 ease-in-out">
      <NavBar />
    </div>
  );
}
