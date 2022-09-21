import TextParapraph from "./TextParapraph";
import TitleParagraph from "./TitleParagraph";

export default function BottomText() {
  return (
    <div className="container mx-auto px-24 mt-16 flex mb-16">
      <div className="w-6/12 my-auto">
        <TitleParagraph>Enjoy Your</TitleParagraph>
        <TitleParagraph>Coffee Now!!!</TitleParagraph>
      </div>

      <div className="w-6/12">
        <TextParapraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates labore iusto laboriosam fugit quisquam, sit cupiditate incidunt! Soluta, maiores eum.</TextParapraph>
      </div>
    </div>
  );
}
