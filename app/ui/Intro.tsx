"use client";
import { CharReveal, RevealText } from "./animations";
import Link from "next/link";
import { Keyboard3D } from "./3D";

export default function Intro() {
  const myName = ["Farrel", "Giovanni", "Jaohari"];
  const splittedName = myName.map((name) => name.split(""));

  return (
    <section className="container min-h-screen py-16" id="home">
      <main className="flex flex-wrap items-center ">
        <div
          id="title"
          className="mb-10 w-full lg:relative lg:z-10 lg:mb-0 lg:w-1/2"
        >
          <RevealText>
            <h1 className="mb-2 block text-lg tracking-widest">
              &#47;&#47; Halo semua 👋, Saya
            </h1>
          </RevealText>
          <h1 className="mb-8 text-6xl font-extrabold tracking-tight">
            {splittedName.map((charArray, index) => (
              <div key={index} className="flex text-title">
                {charArray.map((char, i) => (
                  <CharReveal delay={parseFloat(`0.${i}`)} key={i}>
                    <span key={char} className="block uppercase">
                      {char}
                    </span>
                  </CharReveal>
                ))}
              </div>
            ))}
          </h1>
          <RevealText>
            <p className="mb-10 text-xl">
              &#47;&#47; Front-end | Back-end Web Developer
            </p>
          </RevealText>
          <RevealText>
            <h1 className="flex flex-wrap gap-2">
              <span className="text-varType">const </span>
              <span className="text-varName">githubLink </span>
              <span> = </span>
              <Link
                href={"https://github.com/MeongGanas"}
                className="text-varValue"
              >
                &quot;https://github.com/MeongGanas&quot;
              </Link>
            </h1>
          </RevealText>
        </div>
        <div className="w-full">
          <Keyboard3D />
        </div>
      </main>
    </section>
  );
}
