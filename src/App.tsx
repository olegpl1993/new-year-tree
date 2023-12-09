import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Floor from "./components/Floor/Floor";
import Tree from "./components/Tree/Tree";
import { Environment, OrbitControls } from "@react-three/drei";
import Box from "./components/Box/Box";
import Floor2 from "./components/Floor2/Floor2";
import PointLight from "./components/PointLight/PointLight";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__title">New Year Tree</h1>
        <div className="app__canvasWrapper">
          <Canvas shadows>
            <ambientLight intensity={3} />
            <PointLight position={[1.5, 3, 1.5]} intensity={30} point />

            <OrbitControls
              target={[0, 1.5, 0]} // Задайте желаемую точку в сцене
              minPolarAngle={Math.PI / 2} // Минимальный угол места (ограничение вращения вниз)
              maxPolarAngle={Math.PI / 2} // Максимальный угол места (ограничение вращения вверх)
              minDistance={2} // Минимальное расстояние (ограничение зума внутрь сцены)
              maxDistance={4} // Максимальное расстояние (ограничение зума наружу сцены)
              enablePan={false} // Отключение сдвига камеры
            />

            <Tree position={[0, 0, 0]} />

            <Box position={[0, 2.5, 5]} rotation={[0, 0, 0]} />
            <Box position={[5, 2.5, 0]} rotation={[0, 1.57, 0]} />
            <Box position={[-5, 2.5, 0]} rotation={[0, 1.57, 0]} />
            <Box position={[0, 2.5, -5]} rotation={[0, 0, 0]} />

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
