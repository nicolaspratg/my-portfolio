import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import React, { useEffect, useState } from "react";
import { Footer } from "@/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 350, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <Head>
        <title>Nicolás de Prat Gay</title>
        <meta name="description" content="Nicolás de Prat Gay's Portfolio" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <div className="overflow-x-hidden bg-custom-gradient bg-center bg-fixed">
        <div>
          <MobileNav nav={nav} closeNav={closeNav} />
          <Nav nav={nav} openNav={openNav} closeNav={closeNav} />
          <div id="home">
            <Hero />
          </div>
          <div className="relative z-[30]">
            <div id="about">
              <About />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="skills">
              <Skills />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="contact">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
