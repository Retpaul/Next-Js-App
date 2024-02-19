import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col md:flex-row gap-28 md:gap-14 lg:gap-24">
      <div className="flex-1 flex flex-col gap-12 md:gap-6 lg:gap-12">
        <h2 className="text-blue-600">About Agency</h2>
        <h1 className="text-6xl md:text-3xl lg:text-6xl lg:lead capitalize font-bold">
          We create digital ideas that are bigger, bolder & braver
        </h1>
        <p className="text-xl font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          placeat dolorem modi nostrum ad quod.
        </p>
        <div className="flex flex-col md:flex-row gap-[50px] md:gap-0 items-center justify-between">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-blue-900 text-2xl font-semibold">
              10 K+
            </h1>
            <p>Year of experience</p>
          </div>
          <div  className="flex flex-col gap-[10px]">
            <h1 className="text-blue-900 text-2xl font-semibold">
              10 K+
            </h1>
            <p>Year of experience</p>
          </div>
          <div  className="flex flex-col gap-[10px]">
            <h1 className="text-blue-900 text-2xl font-semibold">
              10 K+
            </h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/about.png" alt="" fill className="object-contain"/>
      </div>
    </section>
  );
}
