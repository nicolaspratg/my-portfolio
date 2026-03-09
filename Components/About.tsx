import { MapPinIcon } from "@heroicons/react/20/solid";
import React from "react";

const About = () => {
  return (
    <section data-aos="fade-left" className="section-space">
      <div className="section-shell">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">About me</p>
        <h2 className="mt-3 max-w-3xl text-[30px] font-bold leading-tight text-slate-100 sm:text-[38px]">
          How I <span className="accent-text">think and build</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          <article className="glass-card lg:col-span-4 lg:row-span-2">
            <p className="text-[17px] leading-relaxed text-slate-200">
              I&apos;m someone who values clarity, depth, and intention in the way ideas are expressed and built.
              I&apos;m naturally curious and tend to question surface-level answers, not to challenge for the sake of it,
              but to truly understand how things work and why they matter. I care about quality and coherence, and I&apos;m
              most engaged when I can refine, improve, and align ideas until they accurately reflect their purpose.
            </p>
          </article>

          <article className="glass-card relative overflow-hidden lg:col-span-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(179,79,205,0.35),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(131,30,163,0.3),transparent_35%)]" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Location</p>
              <p className="mt-2 text-2xl font-bold text-slate-100">Vienna</p>
              <div className="mt-4 rounded-xl border border-[#4e3a72] bg-[#120d20] p-4">
                <div className="flex items-center gap-2 text-[#d6a5e4]">
                  <MapPinIcon className="h-5 w-5" />
                  <span className="text-sm font-semibold">Austria</span>
                </div>
                <div className="mt-3 h-20 rounded-lg border border-[#3a2b57] bg-[linear-gradient(135deg,#1c1430_0%,#2a1840_50%,#171028_100%)]" />
              </div>
            </div>
          </article>

          <article className="glass-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Focus</p>
            <p className="mt-2 text-base font-semibold text-slate-100">Frontend Architecture</p>
            <p className="mt-2 text-sm text-slate-300">Readable systems and scalable components.</p>
          </article>

          <article className="glass-card lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Workflow</p>
            <p className="mt-2 text-base font-semibold text-slate-100">Refine and Improve</p>
            <p className="mt-2 text-sm text-slate-300">I iterate fast, then polish for clarity and quality.</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
