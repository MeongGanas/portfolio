import { RevealContainer } from "./animations";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { skill } from "../libs/data";
import Link from "next/link";

function MyCard({
  data,
}: {
  data: { title: string; img: string; link: string };
}) {
  return (
    <Card shadow="sm" className="bg-darker text-text" isPressable>
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

export default function Skills() {
  return (
    <section className="container min-h-screen py-20" id="skill">
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
            <MyCard data={data} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
