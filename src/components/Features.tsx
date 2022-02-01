import FeatureCard from "./FeatureCard";
import Section from "./Section";
const Features = function () {
  return (
    <Section className="">
      <div className="mt-12 mb-24 ">
        <h1 className="text-4xl text-white  mb-4 border-b-4 border-yellowOwl inline-block mx-auto ">
          Features
        </h1>
        <div className="flex flex-wrap">
          <FeatureCard
            img="/assets/image 1.png"
            title="LOREM IPSUM"
            description="lorem ipsum"
          />{" "}
          <FeatureCard
            img="/assets/image 1.png"
            title="LOREM IPSUM"
            description="lorem ipsum"
          />{" "}
          <FeatureCard
            img="/assets/image 1.png"
            title="LOREM IPSUM"
            description="lorem ipsum"
          />
        </div>
      </div>
    </Section>
  );
};
export default Features;
