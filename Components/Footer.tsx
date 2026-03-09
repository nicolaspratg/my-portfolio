import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export const Footer = () => {
  const handleClick = () => {
    window.open(
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=ndepratg@gmail.com&su=Let's%20work%20together!",
      "_blank"
    );
  };

  return (
    <footer className="pb-16 pt-10">
      <div className="section-shell">
        <div className="grid gap-5 border-t border-[#294463] pt-8 md:grid-cols-3">
          <div className="glass-card flex items-center gap-4">
            <div className="rounded-2xl bg-[#831ea3] p-3">
              <MapPinIcon className="h-8 w-8 text-[#1b2432]" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-100">Austria</p>
              <p className="text-sm text-slate-300">Vienna</p>
            </div>
          </div>

          <a href="https://wa.me/4306606467794" target="_blank" rel="noreferrer" className="glass-card flex items-center gap-4 transition hover:border-[#831ea366]">
            <div className="rounded-2xl bg-[#831ea3] p-3">
              <DevicePhoneMobileIcon className="h-8 w-8 text-[#1b2432]" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-100">Message me</p>
              <p className="text-sm text-slate-300">WhatsApp</p>
            </div>
          </a>

          <button onClick={handleClick} className="glass-card flex items-center gap-4 text-left transition hover:border-[#831ea366]">
            <div className="rounded-2xl bg-[#831ea3] p-3">
              <EnvelopeIcon className="h-8 w-8 text-[#1b2432]" />
            </div>
            <div>
              <p className="text-lg font-bold text-slate-100">Send me an email</p>
              <p className="text-sm text-slate-300">ndepratg@gmail.com</p>
            </div>
          </button>
        </div>

        <p className="mt-8 text-center text-sm tracking-[0.1em] text-slate-400">
          Nicolas de Prat Gay
        </p>
      </div>
    </footer>
  );
};