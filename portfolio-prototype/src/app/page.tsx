import Header from "../../components/header";
import About from "../../components/about";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full min-h-screen pt-20 px-6">
      <Header />

      <About />
    </main>
  );
}
