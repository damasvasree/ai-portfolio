import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const load = async (engine: Engine) => {
      await loadSlim(engine);
      setInit(true);
    };

    load({} as Engine);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#00ffff" },
          links: { enable: true, color: "#00ffff" },
          move: { enable: true, speed: 1 }
        }
      }}
    />
  );
}