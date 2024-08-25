import Header from "../../components/header";
import About from "../../components/about";
import Projects from "../../components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen pt-20 px-4 sm:px-6">
      <Header />

      <About />

      <Projects />
    </main>
  );
}
