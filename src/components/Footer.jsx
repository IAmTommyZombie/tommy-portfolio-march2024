import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaRegFilePdf } from "react-icons/fa";
import resumePDF from "../assets/Thomas_Scales_Resume.pdf";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 p-4 text-white shadow-md block md:hidden">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/IAmTommyZombie"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/thomasscales/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl" />
        </a>
        <a href="mailto:ThomasScales1@gmail.com">
          <FaEnvelope className="text-2xl" />
        </a>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer">
          <FaRegFilePdf className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
