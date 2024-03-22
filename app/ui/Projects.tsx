"use client";
import { RevealContainer } from "./animations";
import { projects } from "../libs/data";
import { ProjectCard } from "./Cards";

export default function Projects({ refCallback }: { refCallback: any }) {
  return (
    <section
      className="container min-h-screen py-28"
      id="projects"
      ref={refCallback}
    >
      <div className="w-full">
        <RevealContainer>
          <div className="w-full text-center mb-10" id="header">
            <h1
              className={`text-3xl sm:text-5xl mb-5 font-extrabold tracking-tight text-title`}
            >
              <span className="text-varType">let</span> Project_Saya;
            </h1>
            <p className="text-base sm:text-lg text-text">
              &#47;&#47; Berikut adalah website-website yang telah saya
              kerjakan.
            </p>
          </div>
        </RevealContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard delay={index} key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
