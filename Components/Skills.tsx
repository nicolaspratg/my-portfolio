import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <section data-aos="fade-right" className="section-space">
      <div className="section-shell">
        <h2 className="heading mb-10">
          Core <span className="accent-text">Skills</span>
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <SkillsItem
              title="React.js Developer"
              year="2022-2023"
              description="Proficient in ReactJS, I specialize in dynamic and interactive interfaces built with component-driven architecture for better performance and maintainability."
            />
            <SkillsItem
              title="PERN Stack Developer"
              year="2023-2024"
              description="I build end-to-end web applications using PostgreSQL, Express, React, and Node.js with a strong focus on scalability and clean architecture."
            />
          </div>
          <div>
            <SkillsItem
              title="Node.js Developer"
              year="2023-2024"
              description="I design performant backend services with Node.js, using event-driven patterns to manage concurrent requests and production-ready APIs."
            />
            <SkillsItem
              title="Express.js Developer"
              year="2022-2023"
              description="Experienced with Express for routing, middleware, and backend API design to connect frontend products with stable server-side logic."
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
    </section>
  );
};

export default Skills;