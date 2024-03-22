"use client";
import { useRef } from "react";
import Intro from "./ui/Intro";
import MyNavbar from "./ui/Navbar";
import Projects from "./ui/Projects";
import Sertifikat from "./ui/Setifikat";
import Skills from "./ui/Skills";

export default function Home() {
  const sectionsRef = useRef([]);
  const refCallback = (element: never) => {
    if (element) {
      sectionsRef.current.push(element);
    }
  };

  return (
    <>
      <MyNavbar sectionsRef={sectionsRef} />

      <main className="scroll-effect">
        <Intro refCallback={refCallback} />

        <Projects refCallback={refCallback} />

        <Skills refCallback={refCallback} />

        <Sertifikat refCallback={refCallback} />
      </main>
    </>
  );
}
