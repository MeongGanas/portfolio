"use client";
import { Button } from "@nextui-org/react";
import { CharReveal, RevealText } from "./animations";
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
  const myName = ["Farrel", "Giovanni", "Jaohari"];
  const splittedName = myName.map((name) => name.split(""));

  return (
    <section className="container min-h-screen py-24" id="home">
      <main className="flex items-center flex-wrap">
        <div id="title" className="w-full mb-10 lg:mb-0 lg:w-1/2">
          <RevealText>
            <h1 className="block pl-2 mb-2 text-lg tracking-widest">
              // Hello all, I am
            </h1>
          </RevealText>
          <h1 className="font-extrabold text-6xl tracking-tight mb-8">
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
            <p className="text-xl mb-10">
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
          <div className="hidden md:block w-full relative" id="desktop">
            <Image
              src={"/projects/kjpp.png"}
              width={450}
              height={300}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700 mb-10"
            />
            <Image
              src={"/projects/osis.png"}
              width={450}
              height={300}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700 absolute right-0 -translate-y-1/2"
            />
            <Image
              src={"/projects/present.png"}
              width={450}
              height={300}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700"
            />
          </div>

          <div className="block md:hidden w-full relative" id="mobile">
            <Image
              src={"/projects/kjpp.png"}
              width={250}
              height={100}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700 mb-10"
            />
            <Image
              src={"/projects/osis.png"}
              width={250}
              height={100}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700 absolute right-0 -translate-y-1/2"
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
