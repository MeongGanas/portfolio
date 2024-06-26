"use client";
import { RevealContainer } from "./animations";
import { projects } from "../libs/data";
import { ProjectCard } from "./Cards";

export default function Projects() {
  return (
    <section className="container min-h-screen py-20" id="projects">
      <div className="w-full">
        <RevealContainer>
          <div className="mb-14 w-full text-center" id="header">
            <h1
              className={`mb-5 text-3xl font-extrabold tracking-tight text-title sm:text-5xl`}
            >
              <span className="text-varType">let</span> Project_Saya;
            </h1>
            <p className="text-base text-text sm:text-lg">
              &#47;&#47; Berikut adalah website-website yang telah saya
              kerjakan.
            </p>
          </div>
        </RevealContainer>
        <div className="project-wrapper">
          {projects.map((project, index) => (
            <ProjectCard i={index} key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
