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

{
  /*  Ball component to create a floating 3D ball with a texture decal.  It uses the Float component from drei to add floating animation. */
}
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={3}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/*meshStandardMaterial with decal to apply the texture to the 3D model*/}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decal to apply the texture to the 3D model */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

{
  /* BallCanvas component to set up the 3D canvas and render the Ball component with the provided icon texture. It uses Suspense to handle loading state and Preload to optimize texture loading. */
}
const BallCanvas = ({ icon }) => {
  return (
    // Canvas component to create a 3D rendering context
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
