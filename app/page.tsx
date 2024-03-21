import Intro from "./ui/Intro";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";

export default function Home() {
  return (
    <main>
      <section className="container min-h-screen pb-40">
        <Intro />
      </section>

      <section className="container min-h-screen py-20">
        <Projects />
      </section>

      <section className="container min-h-screen py-20">
        <Skills />
      </section>
    </main>
  );
}
