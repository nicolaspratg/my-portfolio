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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const ogImageUrl = `${siteUrl}/images/PPNico.jpg`;

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
        <meta property="og:title" content="Nicolas de Prat Gay | Portfolio" />
        <meta property="og:description" content="Portfolio of Nicolas de Prat Gay, full-stack web developer." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content="Portrait of Nicolas de Prat Gay for the portfolio preview image." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nicolas de Prat Gay | Portfolio" />
        <meta name="twitter:description" content="Portfolio of Nicolas de Prat Gay, full-stack web developer." />
        <meta name="twitter:image" content={ogImageUrl} />
        <link rel="icon" href="/images/favicon.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nicolas de Prat Gay | Full-Stack Developer" />
        <meta property="og:description" content="Full-stack developer based in Vienna. Building fast, clear, and scalable web applications with React, TypeScript, and Node.js." />
        <meta property="og:image" content="https://nicodev.vercel.app/images/PPNico.jpg" />
        <meta property="og:url" content="https://nicodev.vercel.app" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nicolas de Prat Gay | Full-Stack Developer" />
        <meta name="twitter:description" content="Full-stack developer based in Vienna. Building fast, clear, and scalable web applications with React, TypeScript, and Node.js." />
        <meta name="twitter:image" content="https://nicodev.vercel.app/images/PPNico.jpg" />
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
