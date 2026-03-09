import React from "react";
import ExperienceSlider from "./ExperienceSlider";

const Experience = () => {
  return (
    <section data-aos="zoom-in-up" className="section-space">
      <div className="section-shell">
        <h2 className="heading">
          Work <span className="accent-text">Experience</span>
        </h2>
        <div className="glass-card mt-12">
          <ExperienceSlider />
        </div>
      </div>
    </section>
  );
};

export default Experience;