import { Button } from "@nextui-org/react";
import { opensans } from "./fonts";
import { CharReveal, RevealText, Shape } from "./animations";
import Link from "next/link";

export default function Intro() {
  const myName = ["Farrel", "Giovanni", "Jaohari"];
  const splittedName = myName.map((name) => name.split(""));

  return (
    <main className="flex flex-wrap">
      <div id="content" className="w-full md:w-1/2 relative z-10">
        <div id="title" className="mb-10">
          <h1
            className={`${opensans.className} font-extrabold text-7xl tracking-tight mb-5`}
          >
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
            <p className="text-2xl max-w-sm tracking-widest uppercase">
              Frontend | Backend Web Developer
            </p>
          </RevealText>
        </div>
        <div className="flex gap-5">
          <Button variant="solid" size="lg" className="bg-button text-black">
            Kontak Saya
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="border-button text-text"
          >
            <Link href={"#projects"}>Lihat Project</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
