"use client";
import { RevealContainer } from "./animations";
import { sertifikat } from "../libs/data";
import { SertifikatCard } from "./Cards";

export default function Sertifikat() {
  return (
    <section className="container min-h-screen py-20" id="sertifikat">
      <div className="w-full">
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
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {sertifikat.map((data, index) => (
            <SertifikatCard delay={index} key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
}
