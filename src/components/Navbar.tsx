import { useEffect, useState } from "react";

const Navbar = function () {
  const [hamburger, setHamburger] = useState<boolean>(false);
  // const [navSize, setSize] = useState<boolean>(false);
  // console.log(window.scrollY);
  // useEffect(() => {
  //   window.addEventListener("scroll", (e) => {
  //     if (window.scrollY > 100) {
  //       setSize(true);
  //     } else if (window.scrollY + 56 < 100) setSize(false);
  //   });
  // }, []);
  return (
    <div className="flex justify-center sticky top-0 bg-owlBlack z-10 px-4">
      <div
        className={
          "flex justify-between lg:items-center w-full flex-col lg:flex-row max-w-7xl duration-300 my-6 "
        }
      >
        <div className="flex items-center">
          <img
            src="/assets/image 1.png"
            className={"w-12 lg:w-1/4 cursor-pointer"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
          <h1 className="mx-2 text-white text-2xl lg:text-3xl">VPN OWL</h1>
          <div
            className={
              "h-9 w-8 flex flex-col lg:hidden absolute right-4 cursor-pointer "
            }
            onClick={() => setHamburger(!hamburger)}
          >
            <span
              className={
                "w-1/2  h-1 inline-block my-1 duration-300 " +
                (!hamburger ? "bg-yellowOwl" : "bg-white")
              }
            ></span>
            <span
              className={
                "w-full  h-1 inline-block my-1 duration-300 " +
                (!hamburger ? "bg-yellowOwl" : "bg-white")
              }
            ></span>
            <span
              className={
                "w-3/4  h-1 inline-block my-1 duration-300 " +
                (!hamburger ? "bg-yellowOwl" : "bg-white")
              }
            ></span>
          </div>
        </div>
        <div
          className={
            "text-white text-xl lg:text-base lg:inline-block flex flex-col lg:flex-row my-4 lg:my-0 " +
            (hamburger ? "" : "hidden")
          }
        >
          <a
            href="#aboutUs"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300 my-2 lg:my-0"
          >
            About Us
          </a>
          <a
            href="#featuresSec"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300 my-2 lg:my-0"
          >
            Features
          </a>
          <a
            href="#gallerySec"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300 my-2 lg:my-0"
          >
            Gallery
          </a>
          <a
            href="#reviewsSec"
            className="mx-4 cursor-pointer hover:text-yellowOwl  duration-300 my-2 lg:my-0"
          >
            Reviews
          </a>
          <a
            href="#contactUs"
            className="mx-4 lg:bg-yellowOwl lg:rounded-tr-xl lg:rounded-bl-xl lg:p-4 lg:text-black lg:hover:rounded-lg hover:text-yellowOwl lg:hover:text-white duration-300 cursor-pointer my-2 lg:my-0"
          >
            Contact Us
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
