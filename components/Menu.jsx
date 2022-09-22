import { Card } from "flowbite-react";
import TitleParagraph from "./TitleParagraph";
import CarouselMenu from "./CarouselMenu";
import TextParagraph from "./TextParagraph";

export default function Menu() {
  return (
    <section id="menu" className="bg-slate-200 py-10">
      <div className="flex justify-center my-auto pb-5">
        <TitleParagraph>Menu</TitleParagraph>
      </div>

      <CarouselMenu />

      <div className="container mx-auto flex md:justify-evenly lg:justify-center invisible md:visible fixed md:relative">
        <div className="max-w-sm px-4">
          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-1.jpg">
            <h5 className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Espresso</h5>
            <TextParagraph className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laudantium fuga quis dolore eius ducimus amet consectetur.</TextParagraph>
          </Card>
        </div>
        <div className="max-w-sm px-2">
          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-2.jpg">
            <h5 className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cappucino</h5>
            <TextParagraph className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem placeat officia eligendi repellat consectetur ducimus.</TextParagraph>
          </Card>
        </div>
        <div className="max-w-sm px-4">
          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-3.jpg">
            <h5 className="text-2xl md:text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cold Brew Coffee</h5>
            <TextParagraph className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae similique esse corporis aperiam neque placeat quod.</TextParagraph>
          </Card>
        </div>
      </div>
    </section>
  );
}
