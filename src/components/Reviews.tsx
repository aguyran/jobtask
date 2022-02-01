import Section from "./Section";
import { useKeenSlider } from "keen-slider/react";
import ReviewCard from "./ReviewCard";

const Reviews = function () {
  const [ref] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3500);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <Section className=" " id="reviewsSec">
      <div className=" ">
        <h1 className="text-4xl text-white  mb-4 border-b-4 border-yellowOwl inline-block mx-auto ">
          Reviews
        </h1>

        <div ref={ref} className="keen-slider">
          <div className="keen-slider__slide ">
            {" "}
            <ReviewCard
              img="/assets/image 1.png"
              title="LOREM IPSUM"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in metus consectetur, mattis diam tincidunt, cursus urna. "
            />{" "}
          </div>
          <div className="keen-slider__slide ">
            {" "}
            <ReviewCard
              img="/assets/image 1.png"
              title="LOREM IPSUM"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in metus consectetur, mattis diam tincidunt, cursus urna. "
            />{" "}
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Reviews;
