import Typing from "./Typing";

export default function Hero() {
  return (
    <div id="home" className="bg-hero-4 h-[450px] ">
      <div className="flex justify-center ">
        <img src="/logo-white.png" alt="logo Sarang Coffee" className="mb-6 mt-36 " />
      </div>

      <div className="flex justify-center truncate ">
        <h1 className="text-sm sm:text-2xl text-white shadow-sm uppercase font-semibold ">
          <Typing />
        </h1>
      </div>

      <div className="flex justify-center">
        <button className="flex justify-center bg-yellow-400 p-3 px-9 text-white rounded mt-10 hover:bg-yellow-700">Learn More</button>
      </div>
    </div>
  );
}
