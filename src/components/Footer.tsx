import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = function () {
  return (
    <div className="w-100 bg-owlLegend text-white text-center py-12 flex flex-col justify-center items-center">
      © 2022 VPN OWL
      <div className="text-white flex my-4">
        <FaTwitter className="mx-2 cursor-pointer hover:text-yellowOwl hover:scale-110 duration-300" />
        <a
          href="https://www.linkedin.com/in/aguyran/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="mx-2 cursor-pointer hover:text-yellowOwl hover:scale-110 duration-300" />
        </a>
        <a href="https://github.com/aguyran" target="_blank" rel="noreferrer">
          <FaGithub className="mx-2 cursor-pointer hover:text-yellowOwl hover:scale-110 duration-300" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
