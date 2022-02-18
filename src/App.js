import "./styles.css";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Box from "./components/Box";
import { OrbitControls } from "@react-three/drei";
import Sphere from "./components/AnimatedSphere";
import Iphone from "./components/Iphone";

export default function App() {
  return (
    <Wrapper className="App">
      {/* <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas> */}
      <Canvas className="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: SpeechRecognitionAlternative;
  background: #111;
  width: 100%;
  height: 100vh;

  canvas {
    min-height: 100vh;
    min-width: 100%;
  }
`;
