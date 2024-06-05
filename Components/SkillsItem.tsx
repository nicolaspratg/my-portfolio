import React from "react";

interface Props {
  title: string;
  year: string;
  description: string;
}
const SkillsItem = ({ title, year, description }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-white py-[0.9rem] border-[2px] border text-[18px] font-bold rounded">
        {year}
      </span>
      <h1 className="mt-[2rem] capitalize font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h1>
      <p className="text-white font-normal w-[80%] text-[17px] opacity-80">
        {description}
      </p>
    </div>
  );
};

export default SkillsItem;
