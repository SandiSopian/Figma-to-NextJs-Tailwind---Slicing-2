import Typing from "./Typing";

export default function Hero() {
  return (
    <section id="home" className="bg-hero-4 h-[450px] ">
      <div className="flex justify-start ml-16">
        <div className="mt-[120px]">
          <img src="/logo-brown.png" alt="logo Sarang Coffee" className="mb-12 " />
          <h1 className="uppercase ">
            <Typing />
          </h1>
          <h1 className="uppercase ">the best coffee full of love</h1>
        </div>
      </div>
    </section>
  );
}
