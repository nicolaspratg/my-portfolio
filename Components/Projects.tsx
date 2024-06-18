import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading mb-[2rem]">Projects</h1>
      <div className="w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[2rem]">
        <a
          href="https://github.com/PetPalacePF/petpalace"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/PetPalace Shop.png"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/nicolaspratg/toDoList-AndesDocs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/To-do list.png"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/nicolaspratg/Rick-And-Morty"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="500">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/RnM Detail.png"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/nicolaspratg/Countries-PI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/Countries Home.png"
                alt="portfolio"
                layout="fill"
                className="object-contain"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
