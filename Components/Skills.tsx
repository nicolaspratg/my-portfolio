import React from "react";

type SkillGroup = {
  title: string;
  subtitle: string;
  skills: string[];
};

const featuredSkills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    subtitle: "Production-ready UI and DX",
    skills: ["JavaScript", "HTML5", "CSS3", "Redux Toolkit", "React Native", "Storybook", "Accessibility (WCAG 2.1)"],
  },
  {
    title: "Backend",
    subtitle: "APIs, data, and architecture",
    skills: ["Express.js", "REST APIs", "SQL", "tRPC", "Zod", "DynamoDB"],
  },
  {
    title: "Quality & Delivery",
    subtitle: "How I ship reliably",
    skills: ["Jest", "React Testing Library", "TDD", "GitHub Actions", "Docker", "Vercel", "AWS", "Peer Reviews"],
  },
  {
    title: "Collaboration",
    subtitle: "Tools and workflow",
    skills: ["Figma", "Jira", "Trello", "Notion", "Slack", "Agile"],
  },
];

const Skills = () => {
  return (
    <section data-aos="fade-right" className="section-space">
      <div className="section-shell">
        <h2 className="heading">
          Skills & <span className="accent-text">Tech Stack</span>
        </h2>

        <div className="glass-card mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Most Used</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {featuredSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#831ea366] bg-[#831ea328] px-4 py-2 text-[14px] font-semibold tracking-[0.08em] text-[#e8ccf1]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-card">
              <h3 className="text-[28px] font-bold text-slate-100">{group.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{group.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#4e3a72] bg-[#1b153088] px-3 py-1 text-[13px] font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
