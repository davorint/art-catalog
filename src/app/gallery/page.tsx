import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Gallery3D() {
  return (
    <Canvas>
      <ambientLight />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </Canvas>
  );
}