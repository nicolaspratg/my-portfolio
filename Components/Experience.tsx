import React from "react";
import ExperienceSlider from "./ExperienceSlider";

const Experience = () => {
  return (
    <div data-aos="zoom-in-up" className="pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">My <span className="text-[#831ea3]">Experience</span></h1>
      <div className="pt-[5rem] pb-[4rem] w-[80%] mx-auto">
        <ExperienceSlider/>
      </div>
    </div>
  );
};

export default Experience;
