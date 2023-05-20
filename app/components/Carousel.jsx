import { Carousel } from "@material-tailwind/react";
 
export default function ImageSlider() {
  return (
    <Carousel

      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="/assets/images/banner.jpg"
        alt="image 1"
        className="h-400 w-full object-cover"
      />
      <img
        src="/assets/images/banner2.jpg"
        alt="image 2"
        className="h-400 w-full object-cover"
      />
      <img
        src="/assets/images/banner.jpg"
        alt="image 3"
        className="h-400 w-full object-cover"
      />
    </Carousel>
  );
}