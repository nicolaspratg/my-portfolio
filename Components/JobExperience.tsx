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
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded"
      />
      {/* <div className="flex items-center mx-auto">
        
      </div> */}
      <h1 className="text-[25px] text-white mt-[1rem]"></h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem]">{role}</p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">{description}</p>
    </div>
  );
};

export default JobExperience;
