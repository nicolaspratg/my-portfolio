import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const serviceCards = [
  {
    title: "Product UIs",
    description:
      "Pixel-perfect, accessible interfaces with React and TypeScript. Performance-first from the start, built to last in production.",
    icon: CodeBracketSquareIcon,
    aos: "fade-right",
  },
  {
    title: "Scalable APIs",
    description:
      "REST APIs and data layers with Node.js and PostgreSQL, designed for clarity, correctness, and real-world load.",
    icon: CommandLineIcon,
    aos: "zoom-in",
  },
  {
    title: "End-to-end Delivery",
    description:
      "Architecture, build, CI/CD, and deployment — I own the full cycle from first commit to production handoff.",
    icon: RocketLaunchIcon,
    aos: "fade-left",
  },
];

const Services = () => {
  return (
    <section className="section-space">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Services</p>
        <h2 className="mt-3 max-w-3xl text-[30px] font-bold leading-tight text-slate-100 sm:text-[38px]">
          What I <span className="accent-text">build</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                data-aos={card.aos}
                className="glass-card group transition duration-300 hover:-translate-y-2 hover:border-[#831ea366]"
              >
                <Icon className="h-10 w-10 text-[#b34fcd]" />
                <h3 className="mt-5 text-[24px] font-bold text-slate-100">{card.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed text-slate-300">{card.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
