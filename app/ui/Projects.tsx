import Link from "next/link";
import { opensans } from "./fonts";
import { CardReveal, RevealContainer } from "./animations";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function MyCard({ delay, data }: { delay: number; data?: Object }) {
  return (
    <CardReveal delay={parseFloat(`0.${delay}`)}>
      <Card shadow="sm" isPressable>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            alt={"present"}
            className="w-full object-cover"
            src={"/projects/present.png"}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <div className="p-2 text-center w-full">
            <h1 className="text-xl font-bold">Present</h1>
            <p className="mb-3">
              Present adalah website untuk mengisi absensi pekerja.
            </p>
            <Link
              href={"https://present-client-green.vercel.app/"}
              target="_blank"
              className="text-blue-600 underline"
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
  const projects = ["Present", "KJPP", "Web OSIS"];
  return (
    <div className="w-full">
      <RevealContainer>
        <div className="w-full text-center mb-10" id="header">
          <h1
            className={`text-5xl ${opensans.className} mb-5 font-extrabold tracking-tight`}
          >
            Project Saya
          </h1>
          <p className="text-lg">
            Berikut adalah website-website yang telah saya kerjakan.
          </p>
        </div>
      </RevealContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <MyCard delay={index} key={index} />
        ))}
      </div>
    </div>
  );
}
