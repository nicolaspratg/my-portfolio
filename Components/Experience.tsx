import React from "react";
import ExperienceSlider from "./ExperienceSlider";

const Experience = () => {
  return (
    <section data-aos="fade-up" className="section-space">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Experience</p>
        <h2 className="mt-3 max-w-3xl text-[30px] font-bold leading-tight text-slate-100 sm:text-[38px]">
          Where I&apos;ve <span className="accent-text">shipped</span>
        </h2>
        <div className="mt-10">
          <ExperienceSlider />
        </div>
      </div>
    </section>
  );
};

export default Experience;
