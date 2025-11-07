//suspence is for lazy loading components
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
//drei is a helper library for react-three-fiber
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <group>
      {/* stronger ambient to lift shadows */}
      <ambientLight intensity={0.5} />

      {/* soft fill from sky */}
      <hemisphereLight intensity={0.35} groundColor="#222" />

      {/* key light - brighter spotlight */}
      <spotLight
        position={[-10, 40, 20]}
        angle={0.18}
        penumbra={0.6}
        intensity={1.8}
        castShadow
        shadow-mapSize={2048}
      />

      {/* directional rim light to separate model from background */}
      <directionalLight
        position={[10, 10, -10]}
        intensity={0.9}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={0.6} position={[0, 5, 10]} />

      {/* 3D model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  // State to track if the device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Added a useEffect as listener for changes in screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of isMobile state
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes in the media query
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);

    //Added the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    //Canvas is the main component that sets up the 3D rendering context
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense
        fallback={
          <Html center>
            <CanvasLoader />
          </Html>
        }
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
