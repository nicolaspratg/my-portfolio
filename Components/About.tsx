import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ndepratg@gmail.com&su=Let's%20work%20together!",
      "_blank"
    );
  };

  return (
    <section data-aos="fade-left" className="section-space">
      <div className="section-shell grid items-center gap-10 md:grid-cols-2">
        <div className="glass-card">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">About me</p>
          <h2 className="mt-3 text-[32px] font-bold leading-tight text-slate-100 sm:text-[40px]">
            Turning ideas into <span className="accent-text">confident web products</span>
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-slate-300">
            I bridge business goals and technical execution through active listening, user-focused design,
            and practical engineering. I enjoy collaborating closely to deliver products that are both useful and memorable.
          </p>
          <button onClick={handleClick} className="btn-primary mt-8">
            Reach out
            <EnvelopeIcon className="ml-2 h-5 w-5" />
          </button>
        </div>

        <div className="relative mx-auto h-[320px] w-[320px] sm:h-[420px] sm:w-[420px]">
          <div className="absolute right-[-1.2rem] top-[-1.2rem] h-full w-full rounded-[2rem] border border-[#831ea345] bg-[#831ea314]" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-[#3a2b57] bg-[#1b1530] p-3">
            <div className="relative h-full w-full overflow-hidden rounded-[1.4rem]">
              <Image
                src="/images/about.jpg"
                alt="Nicolas working"
                fill
                sizes="(max-width: 768px) 320px, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;