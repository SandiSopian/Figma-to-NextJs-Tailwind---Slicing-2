import TitleParagraph from "./TitleParagraph";
import TextParagraph from "./TextParagraph";
import CarouselQuality from "./CarouselQuality";

export default function Quality() {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row px-8 py-10">
      <div className="lg:w-4/12 mt-5 lg:my-auto md:mr-8 order-3 lg:order-none">
        <TitleParagraph>Best Quality Coffee Bean</TitleParagraph>
        <TextParagraph className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero placeat consequatur nam quo omnis tenetur, temporibus animi? Voluptas aliquam, aspernatur neque nulla eos nam, iste quasi commodi praesentium, hic autem natus vel?
          Minus, quod fuga deserunt enim facilis id consectetur!
        </TextParagraph>
      </div>

      <CarouselQuality />

      <div className="lg:w-4/12 md:-mr-28 order-1 lg:order-none invisible fixed lg:visible lg:relative">
        <img src="/quality-img-1.jpg" alt="Quality Sarang Coffee" className="max-w-[65%] rounded-xl shadow-sm" />
      </div>

      <div className="lg:w-4/12 order-2 lg:order-none invisible fixed lg:visible lg:relative">
        <img src="/quality-img-2.jpg" alt="Quality Sarang Coffee" className="max-w-[120%] lg:ml-4 xl:ml-0 rounded-xl shadow-sm" />
      </div>
    </div>
  );
}
