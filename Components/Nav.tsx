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
        <div className="nav-link">HOME</div>
        <div className="nav-link">SERVICES</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PROJECT</div>
        <div className="nav-link">BLOG</div>
        <div className="nav-link">CONTACT</div>
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
