import { opensans } from "./fonts";
import { RevealContainer } from "./animations";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

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
  const list = [
    {
      title: "TailwindCSS",
      img: "/skill/tailwind.png",
    },
    {
      title: "React",
      img: "/skill/react.png",
    },
    {
      title: "Nodejs",
      img: "/skill/nodejs.png",
    },
    {
      title: "Mongodb",
      img: "/skill/mongodb.png",
    },
    {
      title: "Express JS",
      img: "/skill/expressjs.png",
    },
    {
      title: "Nextjs",
      img: "/skill/nextjs.png",
    },
  ];
  return (
    <div className="w-full">
      <RevealContainer>
        <div className="w-full text-center mb-10" id="header">
          <h1
            className={`text-3xl sm:text-5xl ${opensans.className} mb-5 font-extrabold tracking-tight text-title`}
          >
            Skill Saya
          </h1>
          <p className="text-base sm:text-lg text-text">
            Berikut adalah teknologi yang saya kuasai.
          </p>
        </div>
      </RevealContainer>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
        {list.map((item, index) => (
          <MyCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}
