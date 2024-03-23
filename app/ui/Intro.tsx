"use client";
import { CharReveal, RevealText } from "./animations";
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
  const myName = ["Farrel", "Giovanni", "Jaohari"];
  const splittedName = myName.map((name) => name.split(""));

  return (
    <section className="container min-h-screen py-20" id="home">
      <main className="flex flex-wrap items-center">
        <div id="title" className="mb-10 w-full lg:mb-0 lg:w-1/2">
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
            <h1>
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
        <div className="w-full lg:w-1/2">
          <div className="relative hidden w-full md:block" id="desktop">
            <Image
              src={"/projects/kjpp.png"}
              width={450}
              height={300}
              alt="side-image"
              className="mb-10 rounded-md shadow-md shadow-slate-700"
            />
            <Image
              src={"/projects/osis.png"}
              width={450}
              height={300}
              alt="side-image"
              className="absolute right-0 -translate-y-1/2 rounded-md shadow-md shadow-slate-700"
            />
            <Image
              src={"/projects/present.png"}
              width={450}
              height={300}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700"
            />
          </div>

          <div className="relative block w-full md:hidden" id="mobile">
            <Image
              src={"/projects/kjpp.png"}
              width={250}
              height={100}
              alt="side-image"
              className="mb-10 rounded-md shadow-md shadow-slate-700"
            />
            <Image
              src={"/projects/osis.png"}
              width={250}
              height={100}
              alt="side-image"
              className="absolute right-0 -translate-y-1/2 rounded-md shadow-md shadow-slate-700"
            />
            <Image
              src={"/projects/present.png"}
              width={250}
              height={100}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
