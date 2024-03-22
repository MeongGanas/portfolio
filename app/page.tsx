import Intro from "./ui/Intro";
import Projects from "./ui/Projects";
import Sertifikat from "./ui/Setifikat";
import Skills from "./ui/Skills";
import { ScrollLinked } from "./ui/animations";

export default function Home() {
  return (
    <main>
      <ScrollLinked />

      <Intro />

      <Projects />

      <Skills />

      <Sertifikat />
    </main>
  );
}
