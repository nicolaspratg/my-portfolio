import React from "react";

interface Props {
  title: string;
  year: string;
  description: string;
}

const SkillsItem = ({ title, year, description }: Props) => {
  return (
    <article className="glass-card mb-6">
      <span className="inline-block rounded-full border border-[#831ea352] bg-[#831ea314] px-4 py-2 text-sm font-semibold tracking-wide text-[#d6a5e4]">
        {year}
      </span>
      <h3 className="mt-4 text-[26px] font-bold text-slate-100">{title}</h3>
      <p className="mt-3 text-[16px] leading-relaxed text-slate-300">{description}</p>
    </article>
  );
};

export default SkillsItem;