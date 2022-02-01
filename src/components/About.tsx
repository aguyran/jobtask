import Section from "./Section";
const About = function () {
  return (
    <Section className=" " id ="aboutUs">
      <div className="mt-24">
        <h1 className="text-4xl text-white  mb-4 border-b-4 border-yellowOwl inline-block mx-auto  ">
          About Us
        </h1>
        <p className="mx-2 text-white mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quos
          repellendus doloremque iusto fugit quasi numquam rem expedita
          quibusdam voluptates. Commodi nostrum enim quos corporis nemo!
          Excepturi sapiente reprehenderit iusto.
        </p>

        <img src="/assets/company_logo.dde2a636.svg" className="mx-auto" />
      </div>
    </Section>
  );
};
export default About;
