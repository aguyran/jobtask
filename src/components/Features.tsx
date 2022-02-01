import FeatureCard from "./FeatureCard";
import Section from "./Section";
const Features = function () {
  return (
    <Section className="" id="featuresSec">
      <div className=" ">
        <h1 className="text-3xl lg:text-4xl text-white  mb-4 border-b-4 border-yellowOwl inline-block mx-auto ">
          Features
        </h1>
        <div className="flex flex-wrap flex-col md:flex-row md:justify-center items-center">
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
