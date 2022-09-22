import TextParagraph from "./TextParagraph";
import TitleParagraph from "./TitleParagraph";

export default function BottomText() {
  return (
    <div className="container mx-auto px-8 sm:px-16 lg:px-28 py-10 sm:py-20 md:py-36 lg:py-40 sm:flex ">
      <div className="sm:w-6/12 my-auto">
        <TitleParagraph>Enjoy Your</TitleParagraph>
        <TitleParagraph>Coffee Now!!!</TitleParagraph>
      </div>

      <div className="sm:w-6/12">
        <TextParagraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates labore iusto laboriosam fugit quisquam, sit cupiditate incidunt! Soluta, maiores eum.</TextParagraph>
      </div>
    </div>
  );
}
