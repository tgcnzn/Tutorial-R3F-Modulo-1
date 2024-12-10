import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";

function AnimatedBox() {
  const boxRef = useRef();
  useFrame(() => {
    boxRef.current.rotation.x -= 0.05;
    boxRef.current.rotation.y += 0.01;
    boxRef.current.rotation.z += 0.1;
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[2, 3, 2]} />
      <meshPhongMaterial color="tomato" />
    </mesh>
  );
}

function App() {
  return (
    <>
      <div id="canvas-container">
        <Canvas camera={{ position: [2, 2, 2] }}>
          <AnimatedBox />
          <directionalLight position={[2, 5, 1]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
