"use client";
import { RevealContainer } from "./animations";
import { skill } from "../libs/data";
import { SkillCard } from "./Cards";

export default function Skills({ refCallback }: { refCallback: any }) {
  return (
    <section
      className="container min-h-screen py-28"
      id="skills"
      ref={refCallback}
    >
      <div className="w-full">
        <RevealContainer>
          <div className="w-full text-center mb-10" id="header">
            <h1
              className={`text-3xl sm:text-5xl mb-5 font-extrabold tracking-tight text-title`}
            >
              <span className="text-varType">let</span> Skill_Saya;
            </h1>
            <p className="text-base sm:text-lg text-text">
              &#47;&#47; Berikut adalah teknologi yang saya kuasai.
            </p>
          </div>
        </RevealContainer>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
          {skill.map((data, index) => (
            <SkillCard data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
