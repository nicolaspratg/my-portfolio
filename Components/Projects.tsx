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
          <div data-aos="fade-up" data-aos-delay="300" className="relative">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/PetPalace Shop.png"
                alt="portfolio"
                layout="fill"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-start justify-center text-white p-4">
                <h1 className="text-xl">PetPalace</h1>
                <p className="text-sm hidden sm:block">
                  An e-commerce for pet supplies. Harnessing the power of React
                  with JavaScript for the frontend and Node.js with Express.js
                  for the backend. Using a relational database with PostgreSQL.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/nicolaspratg/toDoList-AndesDocs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="400" className="relative">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/To-do list.png"
                alt="portfolio"
                layout="fill"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-start justify-center text-white p-4">
                <h1 className="text-xl">To-Do List</h1>
                <p className="text-sm hidden sm:block">
                  Using TypeScript, React, Express.js and Node.js, this To-Do
                  List allows you to successfully add tasks, edit them, and
                  delete them. Achieving data persistence through a DynamoDB
                  database.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://rick-and-morty-peach-zeta.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="500" className="relative">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/RnM Detail.png"
                alt="portfolio"
                layout="fill"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-start justify-center text-white p-4">
                <h1 className="text-xl">Rick and Morty API</h1>
                <p className="text-sm hidden sm:block">
                  React.js for frontend interface, providing a sleek and
                  intuitive experience. Character finder through unique ID
                  search. Access to specific characters. Filtering options,
                  allowing users to narrow down their search results.
                </p>
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/nicolaspratg/Countries-PI"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div data-aos="fade-up" data-aos-delay="600" className="relative">
            <div className="transform cursor-pointer hover:-translate-y-4 transition-all duration-500 relative w-[100%] h-[200px] md:h-[300px]">
              <Image
                src="/images/Countries Home.png"
                alt="portfolio"
                layout="fill"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col items-start justify-center text-white p-4">
                <h1 className="text-xl">Countries Project</h1>
                <p className="text-sm hidden sm:block">
                  Utilizing the PERN stack (PostgreSQL, Express, React and Node)
                  I created an intuitive Country Finder with a local PSQL
                  Database, using CRUD. Component-based and modular
                  architechture for better understanding.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
