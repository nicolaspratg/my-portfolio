import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-black`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <a href="#home" className="nav-link-mobile" onClick={closeNav}>
          HOME
        </a>
        <a href="#about" className="nav-link-mobile" onClick={closeNav}>
          ABOUT
        </a>
        <a href="#services" className="nav-link-mobile" onClick={closeNav}>
          SERVICES
        </a>
        <a href="#skills" className="nav-link-mobile" onClick={closeNav}>
          SKILLS
        </a>
        <a href="#projects" className="nav-link-mobile" onClick={closeNav}>
          PROJECTS
        </a>
        <a href="#experience" className="nav-link-mobile" onClick={closeNav}>
          EXPERIENCE
        </a>
        <a href="#contact" className="nav-link-mobile" onClick={closeNav}>
          CONTACT
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
