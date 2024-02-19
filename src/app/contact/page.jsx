import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="flex flex-col md:flex-row gap-28 items-center">
      <div className="flex-1 relative md:h-[500px]">
        <Image src="/contact.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex-1 ">
        <form action="" className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-5 rounded-s bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-5 rounded-s bg-gray-700 text-white"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="p-5 rounded-s bg-gray-700 text-white"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-5 rounded-s bg-gray-700 text-white"
          ></textarea>
          <button className="p-5 bg-blue-600 font-bold text-white rounded-s">Send</button>
        </form>
      </div>
    </section>
  );
}
