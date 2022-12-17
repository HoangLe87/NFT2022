import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useRef, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Stars, OrbitControls, Cloud } from '@react-three/drei'

export default function App() {
  return (
    <Canvas camera={{ position: [-2, 2, 5] }}>
      <Suspense>
      <color args={["black"]} attach="background" />
      <ambientLight intensity={1} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <spotLight intensity={0.6} position={[2, -2, -3]} />
      <Cloud
        opacity={0.04}
        speed={0.2} // Rotation speed
        width={13} // Width of the full cloud
        depth={0.2} // Z-dir depth
        segments={20} // Number of particles
      />
      <Stars radius={100} depth={50} color={"yellow"} count={5000} factor={4} saturation={10} fade speed={1} />
      <Sphere position={[10,10,10]}/>
      <OrbitControls enableZoom={false}/>
      </Suspense>
    </Canvas>
  );
}

  const Sphere = () => {
    const colorMap = useLoader(TextureLoader, "/static/2.jpg")
    const mesh = useRef()
    useFrame(() => {
      return(
        mesh.current.rotation.y += 0.001,
        mesh.current.rotation.z += 0.001
        )})
    return (
      <>
      <mesh ref={mesh} visible castShadow scale={2}>
        <sphereGeometry args={[1,64,64]}/>
        <meshBasicMaterial map={colorMap} color={"orangered"}/>
      </mesh>
      </>
    )
  }

