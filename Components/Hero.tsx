import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";


const Hero = () => {
  return (
    <div className="h-[88vh]">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[2rem] mt-[10vh] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I am <span className="text-[#831ea3]">Nicolás</span>
          </h1>
          <TextEffect />
          <p className="mt-[2rem] text-[18px] text-white">
            A 25-year-old web developer passionate
            about creating engaging and functional online experiences. Since
            starting in 2023, I have specialized in dynamic, responsive websites
            that ensure seamless user experiences.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="/files/CV1.pdf" download="CV - Nicoas de Prat Gay.pdf">
              <button className="px-[2rem] hover:bg-[#831ea3] transition-all duration-200 py-[1rem] text-[18px] font-bold text-white rounded bg-[#46374a59] border border-white flex items-center">
                <p>Download my CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-white mx-[0.5rem]" />
              </button>
            </a>
            <button
              onClick={() =>
                window.open("https://github.com/nicolaspratg", "_blank")
              }
              className="px-[2rem] hover:bg-[#831ea3] transition-all duration-200 py-[1rem] text-[18px] font-bold text-white rounded bg-[#46374a59] border border-white flex items-center"
            >
              <p>Github</p>
            </button>
          </div>
        </div>
        <div className="w-[500px] hidden bg-[#831ea3] relative lg:flex items-center rounded-full h-[500px]">
          <Image
            src="/images/PPNico.jpg"
            alt="Profile Picture"
            layout="fill"
            className="object-cover rounded-full"
            style={{ objectPosition: "center 20%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
