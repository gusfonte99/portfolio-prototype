import Navbar from "../../components/navbar";
import Header from "../../components/header";
import About from "../../components/about";
import Projects from "../../components/projects";
import Experience from "../../components/experience";
import Skills from "../../components/skills";
import Test from "../../components/test";
import ScrollHint from "../../components/scroll-hint";
import { ActiveSectionProviderWrapper } from "../../context/active-section.context";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <ActiveSectionProviderWrapper>
        <Navbar />

        <ScrollHint />

        <Header />

        <Test />

        <Skills />

        <About />

        <Projects />

        <Experience />
      </ActiveSectionProviderWrapper>
    </main>
  );
}
