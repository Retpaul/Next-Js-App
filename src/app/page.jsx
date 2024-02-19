import Image from "next/image";

const Home = () => {
  return (
    <section className="flex flex-col md:flex-row gap-28 md:gap-10 lg:gap-28">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-2xl md:text-4xl lg:text-[70px] capitalize font-bold">
          creative thoughts agency
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
          placeat dolorem modi nostrum ad quod.
        </p>
        <div className="flex gap-5">
          <button className="p-5 min-w-[120px] rounded-s bg-rose-200 text-gray-900">
            Learn More{" "}
          </button>
          <button className="p-5 min-w-[120px] rounded-s bg-blue-600">
            Contact
          </button>
        </div>
        <div className="w-[500px] h-12 relative grayscale">
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image src="/hero.gif" alt="" fill />
      </div>
    </section>
  );
};

export default Home;
