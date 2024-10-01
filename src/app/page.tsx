import { ActiveSectionProviderWrapper } from "../../context/active-section.context";

import Navbar from "../../components/navbar";
import Header from "../../components/header";
import About from "../../components/about";
import Projects from "../../components/projects";
import Experience from "../../components/experience";
import Skills from "../../components/skills";
import ScrollHint from "../../components/scroll-hint";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <ActiveSectionProviderWrapper>
        <Navbar />

        <ScrollHint />

        <Header />

        <Skills />

        <About />

        <Projects />

        <Experience />
      </ActiveSectionProviderWrapper>
    </main>
  );
}
