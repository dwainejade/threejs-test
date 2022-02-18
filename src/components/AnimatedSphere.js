import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.2}>
      <MeshDistortMaterial
        color="salmon"
        attach="material"
        distort={0.3}
        speed={0.7}
        roughness={0.2}
      />
    </Sphere>
  );
}
