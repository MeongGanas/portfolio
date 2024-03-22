"use client";
import { RevealContainer } from "./animations";
import { sertifikat } from "../libs/data";
import { SertifikatCard } from "./Cards";

export default function Sertifikat({ refCallback }: { refCallback: any }) {
  return (
    <section
      className="container min-h-screen py-28"
      id="sertifikat"
      ref={refCallback}
    >
      <div className="w-full">
        <RevealContainer>
          <div className="w-full text-center mb-10" id="header">
            <h1
              className={`text-3xl sm:text-5xl mb-5 font-extrabold tracking-tight text-title`}
            >
              <span className="text-varType">let</span> Setifikat_Saya;
            </h1>
            <p className="text-base sm:text-lg text-text">
              &#47;&#47; Sertifikat-sertifikat telah saya dapatkan dari
              mengikuti berbagai kegiatan.
            </p>
          </div>
        </RevealContainer>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {sertifikat.map((data, index) => (
            <SertifikatCard delay={index} key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
