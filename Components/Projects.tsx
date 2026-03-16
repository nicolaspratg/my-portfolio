import Image from "next/image";
import React from "react";

const featuredProject = {
  href: "https://conception-dev-assessment.vercel.app/playground",
  repo: "https://github.com/nicolaspratg/Conception.dev-Assessment",
  title: "Mockup Generator",
  subtitle: "Natural language prompt to visual architecture diagram generator",
  description:
    "A SvelteKit + TypeScript assessment that transforms natural language prompts into interactive architecture diagrams using AI-generated JSON schema and a responsive visual renderer.",
  stack: ["SvelteKit", "TypeScript", "OpenAI API", "Tailwind", "Playwright"],
};

const projects = [
  {
    href: "https://github.com/PetPalacePF/petpalace",
    image: "/images/PetPalace Shop.png",
    title: "PetPalace",
    description: "Full e-commerce with product catalog, cart, and user auth — built end-to-end with React, Express.js, and PostgreSQL.",
  },
  {
    href: "https://github.com/nicolaspratg/toDoList-AndesDocs",
    image: "/images/To-do list.png",
    title: "To-Do List",
    description: "TypeScript-safe task manager with an Express REST API, DynamoDB persistence, and optimistic UI updates.",
  },
  {
    href: "https://rick-and-morty-peach-zeta.vercel.app/",
    image: "/images/RnM Detail.png",
    title: "Rick and Morty API",
    description: "Character explorer with dynamic filtering, pagination, and detail views — powered by the public Rick & Morty API.",
  },
  {
    href: "https://github.com/nicolaspratg/Countries-PI",
    image: "/images/Countries Home.png",
    title: "Countries Project",
    description: "Search and filter 250+ countries with CRUD operations, Redux state management, and a full PERN stack backend.",
  },
];

const Projects = () => {
  return (
    <section className="section-space">
      <div className="section-shell">
        <h2 className="heading">
          Selected <span className="accent-text">Projects</span>
        </h2>

        <article className="glass-card mt-12 overflow-hidden border-[#831ea366] bg-[linear-gradient(135deg,#1b1535_0%,#1b1530_55%,#2c1238_100%)] p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[#831ea366] bg-[#831ea31f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#e0b6ed]">
              Featured Project
            </span>
            <span className="rounded-full border border-[#4e3a72] bg-[#1b15308f] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
              Main Highlight
            </span>
          </div>

          <h3 className="mt-5 text-[34px] font-bold leading-tight text-slate-100 sm:text-[44px]">
            {featuredProject.title}
          </h3>
          <p className="mt-2 text-lg font-semibold text-[#d6a5e4]">{featuredProject.subtitle}</p>
          <p className="mt-5 max-w-3xl text-[17px] leading-relaxed text-slate-200">{featuredProject.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-[#4e3a72] bg-[#1b153095] px-3 py-1 text-xs font-semibold tracking-[0.08em] text-slate-200">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={featuredProject.href} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Live Demo
            </a>
            <a href={featuredProject.repo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              View GitHub
            </a>
          </div>
        </article>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">
              <article data-aos="fade-up" data-aos-delay={300 + index * 100} className="glass-card h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-2 hover:border-[#831ea366]">
                <div className="relative h-[240px] w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1724] via-[#0f172477] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-[28px] font-bold text-slate-100">{project.title}</h3>
                  <p className="mt-2 text-[16px] leading-relaxed text-slate-300">{project.description}</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;