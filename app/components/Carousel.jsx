import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ImageSlider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={5000}
    >
      <div>
        <img loading="Lazy" src="/assets/images/banner.jpg" alt=" " />
      </div>
      <div>
        <img loading="Lazy" src="/assets/images/banner2.jpg" alt=" " />
      </div>
    </Carousel>
  );
}
