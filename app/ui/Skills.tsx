import { RevealContainer } from "./animations";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { skill } from "../libs/data";

function MyCard({ item }: { item: { title: string; img: string } }) {
  return (
    <Card shadow="sm" className="bg-darker text-text">
      <CardBody className="overflow-visible p-0">
        <div className="flex justify-center items-center h-[140px] bg-text">
          <Image
            radius="none"
            width="140px"
            alt={item.title}
            className="object-cover"
            src={item.img}
          />
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <div className="w-full text-center">
          <h1 className="font-bold">{item.title}</h1>
        </div>
      </CardFooter>
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
          {skill.map((s, index) => (
            <MyCard item={s} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
