import Link from "next/link";
import Typing from "./Typing";

export default function Hero() {
  return (
    <section id="home" className="bg-hero-4 md:h-screen max-[50%]">
      <div className="flex justify-center my-auto">
        <img src="/logo-white.png" alt="logo Sarang Coffee" className="mb-6 md:mb-20 mt-40 md:mt-48 max-w-[70%]" />
      </div>

      <div className="flex justify-center truncate ">
        <h1 className="text-sm sm:text-xl md:text-3xl lg:text-5xl text-yellow-900 shadow-black uppercase font-semibold decoration-2">
          <Typing />
        </h1>
      </div>

      <div className="flex justify-center">
        <button className="flex justify-center bg-yellow-400 mb-20 md:mb-0 p-1 md:p-3 px-6 md:px-9 text-white text-xs md:text-base rounded mt-6 md:mt-20 hover:bg-yellow-700">
          <Link href="/#about">Learn More</Link>
        </button>
      </div>
    </section>
  );
}
