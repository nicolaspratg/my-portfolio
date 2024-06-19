import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
}

const Nav = ({ nav, openNav, closeNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-black shadow-md">
      <div className="flex items-center justify-between w-[85%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          Full-Stack<span className="text-[#831ea3]"> Dev</span>
        </h1>
        <a href="#home" className="nav-link">HOME</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#services" className="nav-link">SERVICES</a>
        <a href="#skills" className="nav-link">SKILLS</a>
        <a href="#projects" className="nav-link">PROJECTS</a>
        <a href="#experience" className="nav-link">EXPERIENCE</a>
        <a href="#contact" className="nav-link">CONTACT</a>
        <div onClick={nav ? closeNav : openNav} className="md:hidden">
          {nav ? (
            <XMarkIcon className="w-[2rem] h-[2rem] cursor-pointer text-[#831ea3]" />
          ) : (
            <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-[#831ea3]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
