import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-[#831ea3]">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center h-[100%] gap-[3rem] mt-[4rem] text-white">
        <div>
          <div className="bg-[#290034ba] hover:scale-110 transform transition-all duration-300  hover:-rotate-6 uppercase font-semibold text-center p-[2rem] rounded">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h1>
            <p className="text-[15px] font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              quas est excepturi dicta deleniti quidem voluptatem facilis.
            </p>
          </div>
        </div>
        <div className="bg-[#290034ba] hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem] rounded">
          <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Backend
          </h1>
          <p className="text-[15px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quas est excepturi dicta deleniti quidem voluptatem facilis.
          </p>
        </div>
        <div className="bg-[#290034ba] hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem] rounded">
          <ComputerDesktopIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
          <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Fullstack
          </h1>
          <p className="text-[15px] font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            quas est excepturi dicta deleniti quidem voluptatem facilis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
