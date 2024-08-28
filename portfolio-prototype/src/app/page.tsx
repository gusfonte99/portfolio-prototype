import Navbar from "../../components/navbar";
import Header from "../../components/header";
import About from "../../components/about";
import Projects from "../../components/projects";
import Experience from "../../components/experience";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />

      <Header />

      <About />

      <Projects />

      <Experience />
    </main>
  );
}
