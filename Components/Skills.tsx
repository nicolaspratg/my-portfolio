import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <h1 className="heading">
        My <span className="text-[#831ea3]">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto items-center md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <SkillsItem title="React.js Developer" year="2022-2023" />
          <SkillsItem title="PERN Stack Developer" year="2023-2024" />
          <SkillsLanguage
            skill1="Javascript"
            skill2="React.js"
            skill3="Tailwind CSS"
            level1="w-[100%]"
          />
        </div>
        <div>
          <SkillsItem title="Node.js Developer" year="2023-2024" />
          <SkillsItem title="Express.js Developer" year="2022-2023" />
          <SkillsLanguage
            skill1="Node.js"
            skill2="Express.js"
            skill3="PostgreSQL"
            level1="w-[100%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
