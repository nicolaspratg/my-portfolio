import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  nav: boolean;
  openNav: () => void;
  closeNav: () => void;
}

const Nav = ({ nav, openNav, closeNav }: Props) => {
  return (
    <header className="fixed top-0 z-[10000] h-[11vh] w-full border-b border-[#294463] bg-[#0f1724dd] backdrop-blur-lg">
      <div className="section-shell flex h-full items-center justify-between">
        <a href="#home" className="text-[20px] font-bold tracking-[0.08em] text-slate-100 sm:text-[24px]">
          Nicolás de Prat Gay
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          <a href="#home" className="nav-link">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#services" className="nav-link">SERVICES</a>
          <a href="#skills" className="nav-link">SKILLS</a>
          <a href="#projects" className="nav-link">PROJECTS</a>
          <a href="#experience" className="nav-link">EXPERIENCE</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>

        <div onClick={nav ? closeNav : openNav} className="cursor-pointer lg:hidden">
          {nav ? (
            <XMarkIcon className="h-[2rem] w-[2rem] text-[#831ea3]" />
          ) : (
            <Bars3Icon className="h-[2rem] w-[2rem] text-[#831ea3]" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;