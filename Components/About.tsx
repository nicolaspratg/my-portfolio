import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto items-center h-[100%] gap-[3rem]">
        <div>
          <h1 className="text-[20px] mb-[1rem] text-white font-bold">
            About me
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] text-white font-bold">
            Transforming <span className="text-[#831ea3]">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              rerum vitae magnam! Numquam exercitationem soluta, nihil quam
              voluptatibus non architecto sapiente adipisci error ipsa hic
              commodi quasi incidunt. Hic, porro!
            </p>
          </div>
          <a href="/files/CV.pdf" download="CV - Nicoas de Prat Gay.pdf">
            <button className="px-[2rem] hover:bg-[#831ea3] transition-all duration-200 py-[1rem] text-[18px] font-bold text-white rounded bg-[#46374a59] border border-white flex items-center">
              <p>Download my CV</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-white mx-[0.5rem]" />
            </button>
          </a>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/about.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative z-[11] w-[100%] h-[100%] object-contain rounded"
          />
          <div className="absolute z-[10] w-[100%] h-[100%] bg-[#831ea3] top-[-2rem] right-[-2rem] rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
