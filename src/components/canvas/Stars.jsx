import {useState, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';



const Stars = (props) => {

  // Reference to the points object. 
  const ref = useRef();

  // Generate random points with 5000 stars within a sphere of radius 1.25
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.25 });

  //useFrame hook to rotate the stars slowly over time
  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
  });

  return (
    <group>
      {/* Points component to render the stars. The positions prop generates random points within a sphere using maath's random.inSphere function. The PointMaterial is used to define the appearance of the points, including color and size. */}
      <Points
        ref={ref}
        positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#f272c8" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points></group>
  )
}



// StarsCanvas component to render the stars in the background using react-three-fiber and drei
const StarsCanvas = () => {
  return (
    //z index -1 to place the stars behind other elements. And absolute positioning to cover the entire screen.
   <div className='w-full h-full absolute inset-0 z-[-1]'>

    <Canvas
      camera={{ position: [0, 0, 1] }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all />
    </Canvas>
   </div>
  );
};

export default StarsCanvas;