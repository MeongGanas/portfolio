import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { CardReveal } from "./animations";
import Link from "next/link";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function ProjectCard({
  i,
  project,
}: {
  i: number;
  project: { name: string; desc: string; link: string; image: string };
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);

  return (
    <div ref={container} className="sticky top-0 flex h-fit items-center">
      <Card
        shadow="sm"
        className="card mx-auto max-w-screen-sm origin-top"
        style={{ top: `calc(-5vh + ${i * 25}px)` }}
      >
        <CardBody className="overflow-hidden p-0">
          <motion.div style={{ scale: imageScale }}>
            <Image
              shadow="sm"
              radius="none"
              width="100%"
              alt={"present"}
              className="w-full object-cover"
              src={`/projects/${project.image}.png`}
            />
          </motion.div>
        </CardBody>
        <CardFooter className="justify-between text-small">
          <div className="w-full p-2 text-center">
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
    </div>
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
          <div className="flex h-[140px] items-center justify-center bg-text text-center">
            <Image
              radius="none"
              width="140px"
              alt={data.title}
              className="object-cover"
              src={data.img}
            />
          </div>
        </CardBody>
        <CardFooter className="justify-between text-small">
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
      <Card shadow="sm" className="card min-w-96" isPressable>
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
