import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Floor from "./components/Floor/Floor";
import Tree from "./components/Tree/Tree";
import { Environment, OrbitControls } from "@react-three/drei";
import Box from "./components/Box/Box";
import Floor2 from "./components/Floor2/Floor2";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__title">New Year Tree</h1>
        <div className="app__canvasWrapper">
          <Canvas shadows>
            <ambientLight intensity={1} />
            <directionalLight
              color="white"
              position={[2, 2, 0]}
              intensity={10}
            />
            <OrbitControls />
            <Box position={[0, 2.5, 5]} rotation={[0, 0, 0]} />
            <Box position={[5, 2.5, 0]} rotation={[0, 1.57, 0]} />
            <Box position={[-5, 2.5, 0]} rotation={[0, 1.57, 0]} />
            <Box position={[0, 2.5, -5]} rotation={[0, 0, 0]} />
            <Tree position={[0, 0, 0]} />
            <Floor position={[0, 0, 0]} rotation={[-1.57, 0, 0]} />
            <Floor2 position={[0, 5, 0]} rotation={[1.57, 0, 0]} />
            <Environment preset="forest" background />
          </Canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
