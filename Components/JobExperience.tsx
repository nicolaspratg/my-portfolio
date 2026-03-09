import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  role: string;
  image: string;
  description: string;
}

const JobExperience = ({ name, role, image, description }: Props) => {
  return (
    <article className="mx-auto flex max-w-4xl flex-col justify-center text-center">
      <Image
        src={image}
        alt={name}
        width={110}
        height={110}
        style={{ objectFit: "contain" }}
        className="mx-auto mb-6 rounded-xl bg-white p-2"
      />
      <p className="text-[30px] font-bold text-slate-100">{name}</p>
      <p className="mt-1 text-[18px] font-semibold text-[#d6a5e4]">{role}</p>
      <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-relaxed text-slate-300">{description}</p>
    </article>
  );
};

export default JobExperience;