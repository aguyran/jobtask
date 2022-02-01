const Navbar = function () {
  return (
    <div className="flex justify-center ">
      <div className=" my-14 flex justify-between items-center w-full  sticky ">
        <div className="flex items-center">
          <img
            src="/assets/image 1.png"
            className="w-1/4 cursor-pointer"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
          <h1 className="mx-2 text-white text-3xl">VPN OWL</h1>
        </div>
        <div className="text-white">
          <a
            href="#aboutUs"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300"
          >
            About Us
          </a>
          <a
            href="#featuresSec"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300"
          >
            Features
          </a>
          <a
            href="#gallerySec"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300"
          >
            Gallery
          </a>
          <a
            href="#reviewsSec"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300"
          >
            Reviews
          </a>
          <a
            href="#contactUs"
            className="mx-4 bg-yellowOwl rounded-tr-xl rounded-bl-xl p-4 text-black hover:rounded-lg  duration-300 cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
