import Section from "./Section";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
const Gallery = function () {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <Section className=" " id="gallerySec">
      <div className="">
        <h1 className="text-3xl lg:text-4xl text-white  mb-4 border-b-4 border-yellowOwl inline-block mx-auto ">
          Gallery
        </h1>
      </div>
      <div className="">
        <div ref={sliderRef} className="keen-slider  text-white">
          <div className="keen-slider__slide flex justify-center items-center ">
            <img src="/assets/1.png" />
          </div>
          <div className="keen-slider__slide flex justify-center items-center ">
            <img src="/assets/2.png" />
          </div>
          <div className="keen-slider__slide flex justify-center items-center ">
            <img src="/assets/3.png" />
          </div>
          <div className="keen-slider__slide flex justify-center items-center ">
            <img src="/assets/4.png" />
          </div>
          <div className="keen-slider__slide flex justify-center items-center">
            <img src="/assets/5.png" />
          </div>
          <div className="keen-slider__slide flex justify-center items-center">
            <img src="/assets/5.png" />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="flex justify-center items-center">
            <div className="text-white text-7xl justify-center">
              {[...Array(instanceRef.current.track.details.slides.length)].map(
                (el, i) => {
                  return (
                    <span
                      key={i}
                      className={
                        "cursor-pointer " +
                        (i === currentSlide ? "text-yellowOwl " : "text-white")
                      }
                      onClick={() => {
                        instanceRef.current?.moveToIdx(i);
                      }}
                    >
                      .
                    </span>
                  );
                }
              )}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};
export default Gallery;
