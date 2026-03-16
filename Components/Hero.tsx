import { ArrowDownTrayIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import TextEffect from "./TextEffect";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden pt-[12vh]">
<div className="section-shell grid gap-x-8 pb-20 pt-10 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="relative z-10">
          <a href="#projects" className="inline-flex items-center gap-3 rounded-full border border-[#831ea366] bg-[#831ea320] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#e6c7f0] hover:border-[#831ea3aa] hover:bg-[#831ea340] transition-colors">
            <span>What&apos;s new</span>
            <span className="inline-flex items-center gap-1 text-slate-200 normal-case tracking-normal">
              Mockup Generator
              <ChevronRightIcon className="h-4 w-4 text-[#d6a5e4]" />
            </span>
          </a>

          <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
            Building robust web apps that are
            <span className="accent-text"> fast, clear, and scalable</span>
          </h1>

          <div className="mt-5">
            <TextEffect />
          </div>

          <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-slate-300">
            I&apos;m Nicolás de Prat Gay, a full-stack developer focused on production-ready frontend architecture,
            performance, and clean delivery workflows from idea to deployment.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="/files/CV1.pdf" download="CV - Nicolas de Prat Gay.pdf" className="btn-primary">
              Download CV
              <ArrowDownTrayIcon className="ml-2 h-5 w-5" />
            </a>
            <a href="https://github.com/nicolaspratg" target="_blank" rel="noreferrer" className="btn-ghost">
              View on GitHub
            </a>
          </div>
        </div>

        <div className="relative mt-14 lg:mt-0">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 -left-16 -z-10 w-[160%] skew-x-[-24deg] rounded-2xl border border-[#3a2b57] bg-[#120d20] shadow-[0_24px_80px_-30px_rgba(0,0,0,0.95)]"
          />

          <div className="relative overflow-hidden rounded-2xl border border-[#4e3a72] bg-[#1b1530] shadow-[0_22px_60px_-24px_rgba(0,0,0,0.9)]">
            <div className="flex items-center gap-2 border-b border-[#3a2b57] bg-[#140f24] px-4 py-3 text-xs text-slate-400">
              <span className="h-2.5 w-2.5 rounded-full bg-[#b34fcd]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#7a5db8]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4e3a72]" />
              <span className="ml-3">portfolio/highlight.tsx</span>
            </div>

            <div className="space-y-4 px-5 py-6 text-sm leading-7 text-slate-300">
              <p className="text-[#d6a5e4]">const profile = {`{`}</p>
              <p className="pl-4">role: &quot;Full-Stack Developer&quot;,</p>
              <p className="pl-4">stack: [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;],</p>
              <p className="pl-4">focus: [&quot;Performance&quot;, &quot;UX&quot;, &quot;Maintainable code&quot;],</p>
              <p className="pl-4">shipping: &quot;CI/CD + testing + review&quot;</p>
              <p className="text-[#d6a5e4]">{`}`};</p>

              <div className="mt-6 rounded-xl border border-[#3a2b57] bg-[#140f24] p-4">
                <p className="text-xs uppercase tracking-[0.1em] text-slate-400">Current Highlight</p>
                <p className="mt-2 text-base font-semibold text-slate-100">Mockup Generator</p>
                <p className="mt-1 text-sm text-slate-300">Natural Language prompt to visual architecture diagram generator.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
