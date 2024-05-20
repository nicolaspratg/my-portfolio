import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Developer.",
        1500, 
        "Thinker.",
        1500,
        "Tech Enthusiast.",
        1500,
        "Learner.",
        1500,
      ]}
      speed={50}
      className="text-[2rem] md:text-[3rem] text-white font-bold"
      repeat={Infinity} 
    />
  );
};

export default TextEffect;
