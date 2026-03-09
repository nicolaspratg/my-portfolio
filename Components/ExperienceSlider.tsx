import Image from "next/image";
import React from "react";

type DevRole = {
  image: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  stack: string[];
};

type OtherRole = {
  company: string;
  role: string;
  period: string;
};

const devRoles: DevRole[] = [
  {
    image: "/images/nuela.svg",
    company: "Nuela",
    role: "Full-Stack Developer",
    period: "Jul. 2025 – Dec. 2025",
    location: "Madrid",
    bullets: [
      "Built complex academic scheduling and timetabling workflows for admin and teacher portals.",
      "Delivered responsive multilingual interfaces across multiple user roles.",
      "Optimized educational data flows for scalability and strong data integrity.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    image: "/images/dunnoagency_logo.jpg",
    company: "Dunno Agency",
    role: "Full-Stack Developer",
    period: "Nov. 2023 – Nov. 2024",
    bullets: [
      "Developed and maintained production-grade full-stack applications.",
      "Worked across REST APIs, relational and NoSQL databases.",
      "Collaborated with cross-functional teams in an agile environment.",
    ],
    stack: ["React", "Next.js", "Node.js", "Express.js", "PostgreSQL", "DynamoDB"],
  },
  {
    image: "/images/plannet.jpg",
    company: "plannet.cc",
    role: "Full-Stack Developer",
    period: "Aug. 2022 – Aug. 2023",
    bullets: [
      "Delivered software solutions through agile, client-facing workflows.",
      "Improved product quality and iteration speed through structured code reviews.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express.js", "SQL"],
  },
  {
    image: "/images/plannet.jpg",
    company: "plannet.cc",
    role: "Frontend Developer",
    period: "Oct. 2021 – Aug. 2022",
    bullets: [
      "Built user-centered MVPs and SPAs directly from Figma designs.",
      "Integrated backend microservices for smooth, data-driven user experiences.",
    ],
    stack: ["React", "TypeScript", "Redux", "Figma"],
  },
];

const otherRoles: OtherRole[] = [
  { company: "Riml Sports", role: "Rental Staff", period: "Nov. 2024 – Apr. 2025" },
  { company: "Lengas Wear", role: "Workshop Manager", period: "Aug. 2020 – Apr. 2021" },
  { company: "Contagram", role: "Jr. Sales Agent", period: "Aug. 2019 – Jul. 2020" },
  { company: "TECHO", role: "Volunteer", period: "2016 – 2019" },
];

const ExperienceSlider = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-6 top-3 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[#831ea3] via-[#3a2b57] to-transparent" />

      <div className="space-y-6">
        {devRoles.map((job, i) => (
          <div key={i} className="relative flex items-start gap-5">
            {/* Logo dot */}
            <div className="relative z-10 h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#4e3a72] bg-[#1b1530] shadow-[0_0_18px_rgba(131,30,163,0.3)]">
              <Image
                src={job.image}
                alt={job.company}
                fill
                sizes="48px"
                className="object-contain p-2"
              />
            </div>

            {/* Card */}
            <div className="glass-card flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-[18px] font-bold text-slate-100">{job.company}</h3>
                  <p className="text-sm font-semibold text-[#b34fcd]">{job.role}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400">{job.period}</span>
                  {job.location && (
                    <p className="text-xs text-slate-500">{job.location}</p>
                  )}
                </div>
              </div>

              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#831ea3]" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-[#4e3a72] bg-[#1b153088] px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Earlier roles */}
        <div className="relative flex items-start gap-5">
          <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center">
            <div className="h-3 w-3 rounded-full border border-[#4e3a72] bg-[#1b1530]" />
          </div>
          <div className="flex-1 rounded-2xl border border-[#3a2b57] bg-transparent px-5 py-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Earlier Roles
            </p>
            <div className="mt-3 space-y-2">
              {otherRoles.map((r, i) => (
                <div key={i} className="flex flex-wrap items-center justify-between gap-x-4">
                  <p className="text-sm text-slate-400">
                    <span className="font-medium text-slate-300">{r.company}</span>
                    {" · "}
                    {r.role}
                  </p>
                  <p className="text-xs text-slate-500">{r.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSlider;
