import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

export default function CarouselMenu() {
  return (
    <div className="md:hidden">
      <div className="h-[40rem] xl:h-80 2xl:h-96">
        <Carousel>
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="max-w-xs m-5">
              <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Espresso</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima laudantium fuga quis dolore eius ducimus.</p>
              </Card>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div className="max-w-xs m-5">
              <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-2.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cappucino</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque exercitationem placeat officia eligendi repellat ducimus.</p>
              </Card>
            </div>
          </div>

          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            {" "}
            <div className="max-w-xs m-5">
              <Card imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc="/menu-img-3.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cold Brew Coffee</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae similique esse corporis aperiam neque placeat quod.</p>
              </Card>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
