import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
//drei is a helper library for react-three/fiber
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
// Loader component to show while 3D model is loading
import CanvasLoader from "../Loader";
import { AmbientLight, DirectionalLight } from "three";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    // Canvas component to create a 3D rendering context
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
