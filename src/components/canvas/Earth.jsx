import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
//utility functions from drei
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

//Earth model component
const Earth = () => {
  // Load the 3D model of the Earth using useGLTF hook
  const earth = useGLTF("./planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.5} position-y={0.1} rotation={[0, 0, 0]} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      // Enabling preserveDrawingBuffer to allow screenshots of the canvas
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense component to handle the loading state of the Earth model. CanvasLoader is displayed while the model is being loaded. */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={Math.PI / 2}
        />

        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
