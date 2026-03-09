import { MapPinIcon } from "@heroicons/react/24/outline";
import dynamic from "next/dynamic";
import React from "react";

const ViennaMap = dynamic(() => import("./ViennaMap"), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-lg bg-[#120d20]" />,
});

const craftTags = ["Clean Code", "Performance", "Accessibility", "DX", "Design Systems"];

const About = () => {
  return (
    <section data-aos="fade-left" className="section-space">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">About me</p>
        <h2 className="mt-3 max-w-3xl text-[30px] font-bold leading-tight text-slate-100 sm:text-[38px]">
          How I <span className="accent-text">think and build</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {/* Bio */}
          <article className="glass-card flex flex-col lg:col-span-4 lg:row-span-2">
            <p className="text-[17px] leading-relaxed text-slate-200">
              I&apos;m someone who values clarity, depth, and intention in the way ideas are expressed and built.
              I&apos;m naturally curious and tend to question surface-level answers, not to challenge for the sake of it,
              but to truly understand how things work and why they matter. I care about quality and coherence, and I&apos;m
              most engaged when I can refine, improve, and align ideas until they accurately reflect their purpose.
            </p>
            <div className="mt-auto border-t border-[#3a2b57] pt-5">
              <p className="mb-3 text-xs uppercase tracking-[0.14em] text-slate-400">What I care about</p>
              <div className="flex flex-wrap gap-2">
                {craftTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#4e3a72] bg-[#1b153066] px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Location */}
          <article className="glass-card relative overflow-hidden lg:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(179,79,205,0.35),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(131,30,163,0.3),transparent_35%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Location</p>
              <div className="mt-1 flex items-center gap-2">
                <p className="text-2xl font-bold text-slate-100">Vienna</p>
                <div className="flex items-center gap-1.5 rounded-full border border-[#4e3a72] bg-[#1b1530cc] px-2.5 py-0.5">
                  <MapPinIcon className="h-3.5 w-3.5 text-[#b34fcd]" />
                  <span className="text-xs font-medium text-slate-300">Austria</span>
                </div>
              </div>
              <div className="mt-3 flex-1 overflow-hidden rounded-xl border border-[#4e3a72]" style={{ minHeight: "140px" }}>
                <ViennaMap />
              </div>
            </div>
          </article>

          {/* Status */}
          <article className="glass-card relative overflow-hidden lg:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(131,30,163,0.2),transparent_50%)]" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Status</p>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#831ea3] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#b34fcd]" />
                </span>
                <p className="text-base font-semibold text-slate-100">Open to opportunities</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Based in Vienna, available for remote positions and freelance projects.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
