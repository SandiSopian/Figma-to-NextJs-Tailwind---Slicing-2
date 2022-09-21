import TitleParagraph from "./TitleParagraph";
import TextParapraph from "./TextParapraph";

export default function Quality() {
  return (
    <div className="container mx-auto mt-12 flex flex-shrink">
      <div className="w-4/12 my-auto mr-8">
        <TitleParagraph>Best Quality Coffee Bean</TitleParagraph>
        <TextParapraph className="mt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero placeat consequatur nam quo omnis tenetur, temporibus animi? Voluptas aliquam, aspernatur neque nulla eos nam, iste quasi commodi praesentium, hic autem natus vel?
          Minus, quod fuga deserunt enim facilis id consectetur!
        </TextParapraph>
      </div>

      <div className="w-4/12 -mr-28">
        <img src="/quality-img-1.jpg" alt="Quality Sarang Coffee" className="max-w-[65%] rounded-xl shadow-sm" />
      </div>

      <div className="w-4/12">
        <img src="/quality-img-2.jpg" alt="Quality Sarang Coffee" className="max-w-[120%] rounded-xl shadow-sm" />
      </div>
    </div>
  );
}
