import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full-Stack Developer.",
        1500,
        "Frontend Architect.",
        1500,
        "Based in Vienna.",
        1500,
        "Shipping since 2021.",
        1500,
      ]}
      speed={50}
      className="text-[1.8rem] font-bold text-slate-100 md:text-[2.6rem]"
      repeat={Infinity}
    />
  );
};

export default TextEffect;
