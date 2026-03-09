import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const serviceCards = [
  {
    title: "Frontend",
    description:
      "I craft responsive interfaces with React, TypeScript, and Tailwind, with strong focus on UX clarity and visual polish.",
    icon: CodeBracketSquareIcon,
    aos: "fade-right",
  },
  {
    title: "Backend",
    description:
      "I build robust server-side apps with Node.js and Express, designing reliable APIs and maintainable data workflows.",
    icon: CommandLineIcon,
    aos: "zoom-in",
  },
  {
    title: "Fullstack",
    description:
      "I deliver complete web solutions end-to-end, connecting elegant interfaces to scalable backend architecture.",
    icon: ComputerDesktopIcon,
    aos: "fade-left",
  },
];

const Services = () => {
  return (
    <section className="section-space">
      <div className="section-shell">
        <h2 className="heading">
          What I <span className="accent-text">Offer</span>
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} data-aos={card.aos} className="glass-card group transition duration-300 hover:-translate-y-2 hover:border-[#831ea366]">
                <Icon className="h-14 w-14 text-[#b34fcd]" />
                <h3 className="mt-5 text-[30px] font-bold text-slate-100">{card.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-300">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;