import React from "react";

interface Props {
  skill1: string;
  skill2: string;
  skill3: string;
  level1: string;
}

const SkillsLanguage = ({ skill1, skill2, skill3, level1 }: Props) => {
  const skills = [skill1, skill2, skill3];

  return (
    <div className="glass-card">
      {skills.map((skill) => (
        <div key={skill} className="mb-4 last:mb-0">
          <h4 className="rounded-xl border border-[#294463] bg-[#152c46] px-4 py-4 text-[18px] font-semibold uppercase tracking-[0.08em] text-slate-100">
            {skill}
          </h4>
          <span className={`${level1} mt-2 block h-[6px] rounded-full bg-[#831ea3]`}></span>
        </div>
      ))}
    </div>
  );
};

export default SkillsLanguage;