import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden bg-custom-gradient bg-cover bg-center">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav nav={nav} openNav={openNav} closeNav={closeNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
