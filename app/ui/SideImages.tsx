import Image from "next/image";

export default function SideImages() {
  return (
    <div className="w-full lg:w-1/2">
      <div className="relative hidden w-full md:block" id="desktop">
        <Image
          src={"/projects/kjpp.png"}
          width={450}
          height={300}
          alt="side-image"
          className="mb-10 rounded-md shadow-md shadow-slate-700"
        />
        <Image
          src={"/projects/osis.png"}
          width={450}
          height={300}
          alt="side-image"
          className="absolute right-0 -translate-y-1/2 rounded-md shadow-md shadow-slate-700"
        />
        <Image
          src={"/projects/present.png"}
          width={450}
          height={300}
          alt="side-image"
          className="rounded-md shadow-md shadow-slate-700"
        />
      </div>

      {/* <div className="relative block w-full md:hidden" id="mobile">
            <Image
              src={"/projects/kjpp.png"}
              width={250}
              height={100}
              alt="side-image"
              className="mb-10 rounded-md shadow-md shadow-slate-700"
            />
            <Image
              src={"/projects/osis.png"}
              width={250}
              height={100}
              alt="side-image"
              className="absolute right-0 -translate-y-1/2 rounded-md shadow-md shadow-slate-700"
            />
            <Image
              src={"/projects/present.png"}
              width={250}
              height={100}
              alt="side-image"
              className="rounded-md shadow-md shadow-slate-700"
            />
          </div> */}
    </div>
  );
}
