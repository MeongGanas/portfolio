"use client";
import { RevealContainer } from "./animations";
import { sertifikat } from "../libs/data";
import { SertifikatCard } from "./Cards";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Sertifikat() {
  const target = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
    <section className="container" id="sertifikat">
      <div ref={target} className="relative h-[300vh]">
        <div className="sticky top-1/4 h-screen overflow-hidden">
          <RevealContainer>
            <div className="mb-10 w-full text-center" id="header">
              <h1
                className={`mb-5 text-3xl font-extrabold tracking-tight text-title sm:text-5xl`}
              >
                <span className="text-varType">let</span> Setifikat_Saya;
              </h1>
              <p className="text-base text-text sm:text-lg">
                &#47;&#47; Sertifikat-sertifikat telah saya dapatkan dari
                mengikuti berbagai kegiatan.
              </p>
            </div>
          </RevealContainer>
          <div className="flex items-center">
            <motion.div style={{ x }} className="flex gap-5 bg-background">
              {sertifikat.map((data, index) => (
                <SertifikatCard delay={index} key={index} data={data} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
