import TitleParagraph from "./TitleParagraph";
import TextParagraph from "./TextParagraph";

export default function About() {
  return (
    <section id="about" className="my-10 md:my-20 flex flex-col md:flex-row container mx-auto px-8 lg:px-16 ">
      <div className="lg:w-3/12 lg:mr-8 my-auto">
        <img src="/logo-brown.png" alt="Logo Sarang Coffee" className="my-auto order-1 md:order-none mx-auto md:invisible lg:visible md:fixed lg:relative" />
      </div>

      <div className="md:w-4/12 lg:w-4/12 md:mr-8 mt-6 md:mt-0 order-3 md:order-none">
        <TitleParagraph>Our History</TitleParagraph>

        <TextParagraph className="md:mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, accusamus incidunt laudantium veniam suscipit ipsum alias ea voluptates cupiditate nam fugiat voluptas a laborum nobis quidem. Quam sit, quod ea animi ad recusandae
          quisquam asperiores aspernatur harum, pariatur omnis ullam beatae error, hic laboriosam iusto sequi sint ut! Iure, aliquid!
        </TextParagraph>
      </div>

      <div className="md:w-4/12 lg:w-4/12 md:mr-8 md:mt-8 order-4 md:order-none">
        <TextParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis et animi obcaecati consectetur! Aliquid, numquam minus quasi recusandae, maiores consequuntur est vitae quos pariatur architecto molestiae exercitationem eveniet
          quas deserunt in. Veritatis maiores repellat officia! A, cumque vel. Impedit, ratione?!
        </TextParagraph>
      </div>

      <div className="md:w-4/12 lg:w-2/12 flex justify-center md:flex-none order-2 md:order-none">
        <img src="/about-img.jpg" alt="About Sarang Coffee" className="max-w-[60%] sm:max-w-[30%] md:max-w-[100%] mt-6 md:mt-0 rounded-xl overflow-hidden lg:my-auto lg:max-h-[50%] xl:max-h-[100%]" />
      </div>
    </section>
  );
}
