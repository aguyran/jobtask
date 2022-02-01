const Navbar = function () {
  return (
    <div className="flex justify-center ">
      <div className=" my-14 flex justify-between items-center w-full ">
        <div className="flex items-center">
          <img src="/assets/image 1.png" className="w-1/4" />
          <h1 className="mx-2 text-white text-3xl">VPN OWL</h1>
        </div>
        <div className="text-white">
          <a className="mx-4">About Us</a>
          <a className="mx-4">Features</a>
          <a className="mx-4">Gallery</a>
          <a className="mx-4">Reviews</a>
          <a className="mx-4 bg-yellowOwl rounded-tr-xl rounded-bl-xl p-4 text-black ">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
