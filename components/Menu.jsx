import { Card } from "flowbite-react";
import TitleParagraph from "../components/TitleParagraph";

export default function Menu() {
  return (
    <section className="bg-slate-200 mt-10">
      <div className="flex justify-center pt-8">
        <TitleParagraph>Menu</TitleParagraph>
      </div>
      <div className="container mx-auto flex justify-center">
        <div className="max-w-sm m-10">
          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-1.jpg" className="max-w-[50%]">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Espresso</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laudantium fuga quis dolore eius ducimus.</p>
          </Card>
        </div>
        <div className="max-w-sm m-10">
          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-2.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cappucino</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem placeat officia eligendi repellat ducimus.</p>
          </Card>
        </div>
        <div className="max-w-sm m-10">
          <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-3.jpg">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cold Brew Coffee</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae similique esse corporis aperiam neque placeat quod.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
