import Section from "./Section";
const Contact = function () {
  return (
    <Section className=" " id="contactUs">
      <div className="">
        <h1 className="text-4xl text-white  mb-4 border-b-4 border-yellowOwl inline-block mx-auto ">
          Contact
        </h1>

        <div className="min-h-64 bg-owlLegend p-4 flex flex-col items-start rounded-md">
          {" "}
          {/* <label htmlFor="email">Email</label> */}
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-5 mb-5 bg-owlBlack border border-gray-700 rounded shadow-sm h-12 text-gray-500 focus:outline-none"
          />
          <input
            name="Name"
            type="text"
            placeholder="Name"
            className="p-5 mb-5 bg-owlBlack border border-gray-700 rounded shadow-sm h-12 text-gray-500 focus:outline-none"
          />
          <textarea
            name="Text"
            placeholder="Leave a message"
            className="p-5 mb-5 bg-owlBlack border border-gray-700 rounded shadow-sm h-12 text-gray-500 w-3/4 h-48 focus:outline-none"
          />
          <button className=" bg-yellowOwl rounded-tr-xl rounded-bl-xl p-4 text-black hover:rounded-lg  duration-300 cursor-pointer ">
            Submit
          </button>
        </div>
      </div>
    </Section>
  );
};
export default Contact;
