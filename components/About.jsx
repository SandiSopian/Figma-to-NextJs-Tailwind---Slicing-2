import TitleParagraph from "./TitleParagraph";
import TextParapraph from "./TextParapraph";

export default function About() {
  return (
    <section className="mt-20 flex flex-shrink container mx-auto px-16">
      <div className="w-3/12 mr-8 my-auto">
        <img src="/logo-brown.png" alt="Logo Sarang Coffee" className="my-auto" />
      </div>

      <div className="w-3/12 mr-8">
        <TitleParagraph>Our History</TitleParagraph>

        <TextParapraph className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, accusamus incidunt laudantium veniam suscipit ipsum alias ea voluptates cupiditate nam fugiat voluptas a laborum nobis quidem. Quam sit, quod ea animi ad recusandae
          quisquam asperiores aspernatur harum, pariatur omnis ullam beatae error, hic laboriosam iusto sequi sint ut! Iure, aliquid!
        </TextParapraph>
      </div>

      <div className="w-3/12 mr-8 mt-11">
        <TextParapraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis et animi obcaecati consectetur! Aliquid, numquam minus quasi recusandae, maiores consequuntur est vitae quos pariatur architecto molestiae exercitationem eveniet
          quas deserunt in. Veritatis maiores repellat officia! A, cumque vel. Impedit, ratione?!
        </TextParapraph>
      </div>

      <div className="w-2/12">
        <img src="/about-img.jpg" alt="About Sarang Coffee" className="max-w-[120%] rounded-xl overflow-hidden" />
      </div>
    </section>
  );
}
