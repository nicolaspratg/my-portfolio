import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  level1: string;
}
const SkillsLanguage = ({ skill1, skill2, skill3, level1 }: Props) => {
  return (
    <div>
      <div className="relative mb-[1rem]">
        <h1 className="p-5 my-[10px] w-[100%] uppercase bg-[#290034ba] rounded-sm text-white text-[20px] font-bold">
          {skill1}
        </h1>
        <span
          className={`${level1} bottom-0 h-[6px] absolute bg-white`}
        ></span>
      </div>
      <div className="relative mb-[1rem]">
        <h1 className="p-5 my-[10px] w-[100%] uppercase bg-[#290034ba] rounded-sm text-white text-[20px] font-bold">
          {skill2}
        </h1>
        <span
          className={`${level1} bottom-0 h-[6px] absolute bg-white`}
        ></span>
      </div>
      <div className="relative mb-[1rem]">
        <h1 className="p-5 my-[10px] w-[100%] uppercase bg-[#290034ba] rounded-sm text-white text-[20px] font-bold">
          {skill3}
        </h1>
        <span
          className={`${level1} bottom-0 h-[6px] absolute bg-white`}
        ></span>
      </div>
    </div>
  );
};

export default SkillsLanguage;
