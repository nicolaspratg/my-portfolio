import About from "@/Components/About";
import Experience from "@/Components/Experience";
import { Footer } from "@/Components/Footer";
import Hero from "@/Components/Hero";
import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Projects from "@/Components/Projects";
import Services from "@/Components/Services";
import Skills from "@/Components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      offset: 160,
      duration: 850,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Nicolas de Prat Gay | Portfolio</title>
        <meta name="description" content="Portfolio of Nicolas de Prat Gay, full-stack web developer." />
        <link rel="icon" href="/images/favicon.png" />
      </Head>

      <div className="overflow-x-hidden bg-custom-gradient bg-center bg-fixed">
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav nav={nav} openNav={openNav} closeNav={closeNav} />

        <main className="relative z-[30]">
          <div id="home">
            <Hero />
          </div>
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
        </main>
      </div>
    </>
  );
};

export default HomePage;