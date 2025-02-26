import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-6 flex items-center space-y-0 space-x-2 sm:space-x-6 gradient mt-auto">
   
      <a
        href="https://github.com/jackiemalley11" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white hover:text-[#40F6FC] hover:scale-110 transition-all duration-300 gradient-border"
      >
        <FaGithub size={30} />
      </a>

   
      <a
        href="https://www.linkedin.com/in/jackie-malley-6b2190a4" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-white hover:text-[#40F6FC] hover:scale-110 transition-all duration-300 gradient-border"
      >
        <FaLinkedin size={30} />
      </a>
    </footer>
  );
};

export default Footer;

