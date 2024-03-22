import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CardReveal } from "./animations";
import Link from "next/link";

export function ProjectCard({
  delay,
  project,
}: {
  delay: number;
  project: { name: string; desc: string; link: string; image: string };
}) {
  return (
    <CardReveal delay={parseFloat(`0.${delay}`)}>
      <Card shadow="sm" className="card">
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

export function SkillCard({
  data,
}: {
  data: { title: string; img: string; link: string };
}) {
  return (
    <Card shadow="sm" className="card text-text" isPressable>
      <Link href={data.link} target="_blank" className="w-full">
        <CardBody className="overflow-visible p-0">
          <div className="flex justify-center items-center text-center h-[140px] bg-text">
            <Image
              radius="none"
              width="140px"
              alt={data.title}
              className="object-cover"
              src={data.img}
            />
          </div>
        </CardBody>
        <CardFooter className="text-small justify-between">
          <div className="w-full text-center">
            <h1 className="font-bold">{data.title}</h1>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}

export function SertifikatCard({
  delay,
  data,
}: {
  delay: number;
  data: { image: string; link: string };
}) {
  return (
    <CardReveal delay={parseFloat(`0.${delay}`)}>
      <Card shadow="sm" className="card" isPressable>
        <Link href={data.link} target="_blank">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="none"
              width="100%"
              alt={"present"}
              className="w-full object-cover"
              src={`/sertifikat/${data.image}.png`}
            />
          </CardBody>
        </Link>
      </Card>
    </CardReveal>
  );
}
