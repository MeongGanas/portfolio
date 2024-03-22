import Intro from "./ui/Intro";
import Projects from "./ui/Projects";
import Skills from "./ui/Skills";

export default function Home() {
  return (
    <main>
      <section className="container min-h-screen py-24" id="home">
        <Intro />
      </section>

      <section className="container min-h-screen py-20" id="projects">
        <Projects />
      </section>

      <section className="container min-h-screen py-20" id="skill">
        <Skills />
      </section>
    </main>
  );
}
