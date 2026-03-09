import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (_container: Container | undefined) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            push: { quantity: 3 },
            repulse: { distance: 120, duration: 0.3 },
          },
        },
        particles: {
          color: { value: ["#ffffff", "#b34fcd", "#9b7bdd"] },
          links: {
            color: "#4f3c73",
            distance: 130,
            enable: true,
            opacity: 0.45,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: false,
            speed: 1.6,
            straight: false,
          },
          number: {
            density: { enable: true, area: 900 },
            value: 52,
          },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="pointer-events-none absolute inset-0 -z-0"
    />
  );
};

export default Particle;