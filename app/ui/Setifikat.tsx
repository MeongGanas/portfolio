import { CardReveal, RevealContainer } from "./animations";
import { Card, CardBody, Image } from "@nextui-org/react";
import { projects, sertifikat } from "../libs/data";

function MyCard({ delay, image }: { delay: number; image: string }) {
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
            src={`/sertifikat/${image}.png`}
          />
        </CardBody>
      </Card>
    </CardReveal>
  );
}

export default function Sertifikat() {
  return (
    <section className="container min-h-screen py-20" id="sertifikat">
      <div className="w-full">
        <RevealContainer>
          <div className="w-full text-center mb-10" id="header">
            <h1
              className={`text-3xl sm:text-5xl mb-5 font-extrabold tracking-tight text-title`}
            >
              <span className="text-varType">let</span> Setifikat Saya;
            </h1>
            <p className="text-base sm:text-lg text-text">
              // Sertifikat-sertifikat telah saya dapatkan dari mengikuti
              berbagai kegiatan.
            </p>
          </div>
        </RevealContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sertifikat.map((image, index) => (
            <MyCard delay={index} key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}
