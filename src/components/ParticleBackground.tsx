import { Canvas } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";

function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions}>
      <PointMaterial
        color="#00F0FF"
        size={0.08}        // 👈 increased size
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  );
}