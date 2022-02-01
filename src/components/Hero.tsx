import { BsDownload } from "react-icons/bs";
const Hero = function () {
  return (
    <div className="min-h-full my-24 " >
      <div className="max-w-2xl">
        <h1 className="text-white text-6xl mb-4">
          <span className="text-yellowOwl">Reimagining</span> Privacy
          <br />
          For Everyone{" "}
        </h1>
        <p className="text-white text-xl mb-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione
          explicabo, libero ipsam cumque consequuntur, nam in porro qui
          reprehenderit corrupti modi perferendis deleniti vitae! Deserunt
          minima eveniet corporis voluptatibus?
        </p>
      </div>

      <a className="text-2xl bg-yellowOwl rounded-tr-xl rounded-bl-xl p-4  w-1/2 inline-block flex justify-center items-center">
        <BsDownload className="inline-block mx-2 " />
        Download Now
      </a>
    </div>
  );
};
export default Hero;
