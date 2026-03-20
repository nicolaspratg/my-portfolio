import Image from "next/image";
import React, { useState } from "react";

const featuredProject = {
  href: "https://waypoint-lime.vercel.app",
  repo: "https://github.com/nicolaspratg/Waypoint",
  title: "Waypoint",
  subtitle: "AI-powered travel itinerary planner",
  description:
    "Waypoint turns travel ideas into detailed, personalized day-by-day itineraries in seconds. Built with Next.js and the Claude AI API, it handles auth via Clerk, persists plans with Drizzle ORM on Postgres, and processes payments through Stripe.",
  stack: ["Next.js", "TypeScript", "Claude AI", "Clerk", "Drizzle ORM", "Stripe", "Tailwind"],
};

const projects = [
  {
    href: "https://conception-dev-assessment.vercel.app/playground",
    image: "",
    title: "Mockup Generator",
    description:
      "A SvelteKit + TypeScript assessment that transforms natural language prompts into interactive architecture diagrams using AI-generated JSON schema and a responsive visual renderer.",
  },
  {
    href: "https://github.com/PetPalacePF/petpalace",
    image: "/images/PetPalace Shop.webp",
    title: "PetPalace",
    description:
      "Full e-commerce with product catalog, cart, and user auth — built end-to-end with React, Express.js, and PostgreSQL.",
  },
  {
    href: "https://github.com/nicolaspratg/toDoList-AndesDocs",
    image: "/images/To-do list.webp",
    title: "To-Do List",
    description:
      "TypeScript-safe task manager with an Express REST API, DynamoDB persistence, and optimistic UI updates.",
  },
  {
    href: "https://rick-and-morty-peach-zeta.vercel.app/",
    image: "/images/RnM Detail.webp",
    title: "Rick and Morty API",
    description:
      "Character explorer with dynamic filtering, pagination, and detail views — powered by the public Rick & Morty API.",
  },
  {
    href: "https://github.com/nicolaspratg/Countries-PI",
    image: "/images/Countries Home.webp",
    title: "Countries Project",
    description:
      "Search and filter 250+ countries with CRUD operations, Redux state management, and a full PERN stack backend.",
  },
];

const SLIDE_SIZE = 3;

function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const Projects = () => {
  const slides = chunkArray(projects, SLIDE_SIZE);
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, slides.length - 1));

  return (
    <section className="section-space">
      <div className="section-shell">
        <h2 className="heading">
          Selected <span className="accent-text">Projects</span>
        </h2>

        {/* Featured */}
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
              <span
                key={tech}
                className="rounded-full border border-[#4e3a72] bg-[#1b153095] px-3 py-1 text-xs font-semibold tracking-[0.08em] text-slate-200"
              >
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

        {/* Carousel */}
        <div className="mt-8">
          {/* Slide */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {slides[current].map((project, index) => (
              <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer">
                <article
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 80}
                  className="glass-card h-full overflow-hidden p-0 transition duration-300 hover:-translate-y-2 hover:border-[#831ea366]"
                >
                  {project.image ? (
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1724] via-[#0f172477] to-transparent" />
                    </div>
                  ) : (
                    <div className="flex h-[200px] w-full items-center justify-center bg-[linear-gradient(135deg,#1b1535,#2c1238)]">
                      <span className="text-4xl font-bold text-[#831ea366]">{project.title[0]}</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-[22px] font-bold text-slate-100">{project.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-300">{project.description}</p>
                  </div>
                </article>
              </a>
            ))}
          </div>

          {/* Controls */}
          {slides.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                disabled={current === 0}
                className="rounded-full border border-[#4e3a72] bg-[#1b153095] px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#831ea366] hover:bg-[#831ea31f] disabled:cursor-not-allowed disabled:opacity-30"
              >
                ← Prev
              </button>

              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === current ? "w-6 bg-[#831ea3]" : "bg-[#4e3a72]"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                disabled={current === slides.length - 1}
                className="rounded-full border border-[#4e3a72] bg-[#1b153095] px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-[#831ea366] hover:bg-[#831ea31f] disabled:cursor-not-allowed disabled:opacity-30"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
