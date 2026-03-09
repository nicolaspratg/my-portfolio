import React from "react";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Particle from "./Particle";
import TextEffect from "./TextEffect";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-[14vh]">
      <Particle />
      <div className="section-shell relative z-10 grid items-center gap-10 pb-16 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
            Full-Stack Web Developer
          </p>
          <h1 className="text-[42px] font-extrabold leading-[1.05] text-slate-100 sm:text-[56px] lg:text-[66px]">
            Building clean digital products with
            <span className="accent-text"> real business impact</span>
          </h1>
          <div className="mt-5">
            <TextEffect />
          </div>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-slate-300">
            I am Nicolas, a developer focused on fast, maintainable, and polished web experiences.
            Since 2021, I have helped teams ship modern products that feel great on any device.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="/files/CV1.pdf" download="CV - Nicolas de Prat Gay.pdf" className="btn-primary">
              <span>Download CV</span>
              <ArrowDownTrayIcon className="ml-2 h-5 w-5" />
            </a>
            <button
              onClick={() => window.open("https://github.com/nicolaspratg", "_blank")}
              className="btn-ghost"
            >
              GitHub
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-[340px] sm:h-[420px] sm:w-[420px]">
          <div className="absolute -left-8 top-8 h-[90%] w-[90%] rounded-full border border-[#831ea345] bg-[#831ea314]" />
          <div className="absolute inset-0 rounded-full border border-[#3a2b57] bg-[#1b1530] p-3 shadow-[0_35px_70px_-30px_rgba(0,0,0,0.9)]">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/images/PPNico.jpg"
                alt="Profile Picture"
                fill
                sizes="(max-width: 768px) 340px, 420px"
                className="object-cover"
                style={{ objectPosition: "center 22%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;