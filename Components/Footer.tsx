import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Footer = () => {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ndepratg@gmail.com&su=Let's%20work%20together!",
      "_blank"
    );
  };

  return (
    <footer className="pb-16 pt-10">
      <div className="section-shell">
        <div className="border-t border-[#3a2b57] pt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Contact</p>
          <h2 className="mt-3 text-[30px] font-bold leading-tight text-slate-100 sm:text-[38px]">
            Let&apos;s <span className="accent-text">work together</span>
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <a
              href="https://wa.me/4306606467794"
              target="_blank"
              rel="noreferrer"
              className="glass-card flex items-center gap-4 transition hover:border-[#831ea366]"
            >
              <div className="rounded-2xl bg-[#831ea3] p-3">
                <DevicePhoneMobileIcon className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-100">Message me</p>
                <p className="text-sm text-slate-400">WhatsApp</p>
              </div>
            </a>

            <button
              onClick={handleEmailClick}
              className="glass-card flex items-center gap-4 text-left transition hover:border-[#831ea366]"
            >
              <div className="rounded-2xl bg-[#831ea3] p-3">
                <EnvelopeIcon className="h-7 w-7 text-white" />
              </div>
              <div>
                <p className="text-base font-bold text-slate-100">Send me an email</p>
                <p className="text-sm text-slate-400">ndepratg@gmail.com</p>
              </div>
            </button>
          </div>

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm tracking-[0.1em] text-slate-500">Nicolas de Prat Gay</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/nicolaspratg"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-[#b34fcd]"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://linkedin.com/in/nicolaspratg"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 transition hover:text-[#b34fcd]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
