import { Canvas } from "@react-three/fiber";
import {
  meshBasicMaterial,
  Sphere,
  PerspectiveCamera,
  calculateScaleFactor,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { SrcAlphaFactor } from "three";

const SphereAnimated = () => {
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y = mesh.current.rotation.x += 0.005));
  return (
    <PerspectiveCamera position={[0, 0, 0]}>
      <Sphere ref={mesh} args={[3, 64, 64]}>
        <meshStandardMaterial color="hotpink" />
      </Sphere>
    </PerspectiveCamera>
  );
};

const ThreeJS = () => {
  return (
    <div className="bg-slate-800 flex items-center min-w-full absolute -z-10 min-h-full top-0">
      <Canvas className="relative w-full h-1/2">
        <ambientLight />
        <directionalLight intensity={1} />
        <SphereAnimated />
      </Canvas>
    </div>
  );
};

export default ThreeJS;
