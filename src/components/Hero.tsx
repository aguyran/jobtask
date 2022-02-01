import { BsDownload } from "react-icons/bs";
const Hero = function () {
  return (
    <div className="min-h-full my-24 flex flex-col-reverse md:flex-row">
      <div className="max-w-2xl">
        <h1 className="text-white text-4xl lg:text-6xl mb-4">
          <span className="text-yellowOwl">Reimagining</span> Privacy
          <br />
          For Everyone{" "}
        </h1>
        <p className="text-white text-lg lg:text-xl mb-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ratione
          explicabo, libero ipsam cumque consequuntur, nam in porro qui
          reprehenderit corrupti modi perferendis deleniti vitae! Deserunt
          minima eveniet corporis voluptatibus?
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=openvpn.vpn"
          target="_blank"
          rel="noreferrer"
          className="text-2xl bg-yellowOwl rounded-tr-xl rounded-bl-xl p-4  w-3/4 inline-block flex justify-center items-center hover:rounded-lg  duration-300 cursor-pointer hover:text-white"
        >
          <BsDownload className="inline-block mx-2 " />
          Download Now
        </a>
      </div>

      <img src="/assets/Lighthouse-pana.svg" className="w-96 mx-auto" />
    </div>
  );
};
export default Hero;
