import { Carousel } from "flowbite-react";

export default function CarouselQuality() {
  return (
    <div className="lg:hidden">
      <div className="h-56 sm:h-80 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img src="/quality-img-1-1.jpg" alt="Quality Sarang Coffee" />
          <img src="/quality-img-2-2.jpg" alt="Quality Sarang Coffee" />
        </Carousel>
      </div>
    </div>
  );
}
