"use client";
import { RevealContainer } from "./animations";
import { skill } from "../libs/data";
import { SkillCard } from "./Cards";

export default function Skills() {
  return (
    <section className="container min-h-screen py-20" id="skills">
      <div className="w-full">
        <RevealContainer>
          <div className="mb-10 w-full text-center" id="header">
            <h1
              className={`mb-5 text-3xl font-extrabold tracking-tight text-title sm:text-5xl`}
            >
              <span className="text-varType">let</span> Skill_Saya;
            </h1>
            <p className="text-base text-text sm:text-lg">
              &#47;&#47; Berikut adalah teknologi yang saya kuasai.
            </p>
          </div>
        </RevealContainer>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 xl:grid-cols-6">
          {skill.map((data, index) => (
            <SkillCard data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
