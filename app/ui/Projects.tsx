import Link from "next/link";
import { CardReveal, RevealContainer } from "./animations";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { projects } from "../libs/data";

function MyCard({
  delay,
  project,
}: {
  delay: number;
  project: { name: string; desc: string; link: string; image: string };
}) {
  return (
    <CardReveal delay={parseFloat(`0.${delay}`)}>
      <Card shadow="sm" className="bg-darker">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={"present"}
            className="w-full object-cover"
            src={`/projects/${project.image}.png`}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <div className="p-2 text-center w-full">
            <h1 className="text-xl font-extrabold text-title">
              {project.name}
            </h1>
            <p className="my-3 text-text">{project.desc}.</p>
            <Link
              href={project.link}
              target="_blank"
              className="text-blue-500 underline"
            >
              Lihat Detail
            </Link>
          </div>
        </CardFooter>
      </Card>
    </CardReveal>
  );
}

export default function Projects() {
  return (
    <section className="container min-h-screen py-20" id="projects">
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
            <MyCard delay={index} key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
