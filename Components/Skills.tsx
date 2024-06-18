import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div data-aos="fade-right" className="pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <h1 className="heading">
        My <span className="text-[#831ea3]">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto items-center md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div>
          <SkillsItem
            title="React.js Developer"
            year="2022-2023"
            description="Proficient in ReactJS, I specialize in developing dynamic and interactive user interfaces using its component-based architecture, enhancing user experience and engagement in web applications."
          />
          <SkillsItem
            title="PERN Stack Developer"
            year="2023-2024"
            description="Proficient in the PERN stack (PostgreSQL, Express, React, Node.js), I offer end-to-end web development expertise, seamlessly integrating frontend and backend technologies to deliver efficient and scalable web applications."
          />
        </div>
        <div>
          <SkillsItem
            title="Node.js Developer"
            year="2023-2024"
            description="With expertise in Node.js, I excel in building scalable and high-performance server-side applications, leveraging its event-driven architecture to handle concurrent requests efficiently and deliver robust backend solutions."
          />
          <SkillsItem
            title="Express.js Developer"
            year="2022-2023"
            description="Skilled in Express, I have a strong command of this minimalist web application framework, enabling me to rapidly develop backend APIs, handle routing, and implement middleware for seamless integration of frontend and backend components."
          />
        </div>
        <SkillsLanguage
          skill1="Javascript"
          skill2="React.js"
          skill3="Tailwind CSS"
          level1="w-[100%]"
        />
        <SkillsLanguage
          skill1="Node.js"
          skill2="Express.js"
          skill3="PostgreSQL"
          level1="w-[100%]"
        />
      </div>
    </div>
  );
};

export default Skills;
