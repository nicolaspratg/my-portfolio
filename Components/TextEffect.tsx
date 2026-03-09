import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={["Developer.", 1500, "Problem Solver.", 1500, "Product Builder.", 1500, "Lifelong Learner.", 1500]}
      speed={50}
      className="text-[1.8rem] font-bold text-slate-100 md:text-[2.6rem]"
      repeat={Infinity}
    />
  );
};

export default TextEffect;