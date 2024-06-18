import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
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
    <div className="pt-[8rem] pb-[4rem] bg-black">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#831ea3]">
            <MapPinIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Argentina
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-65">
              San Isidro, Buenos Aires
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#831ea3]">
            <a href="https://wa.me/+5491169114533" target="_blank">
              <DevicePhoneMobileIcon className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black" />
            </a>
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Message me
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-65">
              <ArrowLeftIcon className="md:w-[2rem] md:h-[2rem] w-[2rem] h-[2rem]" />
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="md:w-[6.5rem] md:h-[6.5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#831ea3]">
            <EnvelopeIcon
              onClick={handleClick}
              className="md:w-[4rem] md:h-[4rem] w-[3.5rem] h-[3.5rem] text-black"
            />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] font-semibold text-white">
              Send me an email
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-65">
              ndeprat@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto mt-[2rem] align-center justify-center">
        <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-20">
          Nicolás de Prat Gay
        </div>
      </div>
    </div>
  );
};
