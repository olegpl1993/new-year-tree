import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import PointLight from "./PointLight/PointLight";
import Tree from "./Tree/Tree";
import Sphere from "./Sphere/Sphere";
import Box from "./Box/Box";
import Floor from "./Floor/Floor";
import Floor2 from "./Floor2/Floor2";

type sphereType = {
  position: [number, number, number];
  color?: string;
  pointLight?: boolean;
};
type spheresArrTupe = sphereType[];

function Scene() {
  const spheresArr: spheresArrTupe = [
    { position: [0.45, 1.45, 0.5], color: "blue", pointLight: true },
    { position: [-0.45, 1.45, -0.5], color: "blue", pointLight: true },
    { position: [0.45, 1.45, -0.5], color: "blue", pointLight: true },
  ];

  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <PointLight position={[2, 4.5, 2]} color="red" intensity={30} point />
      <PointLight position={[-2, 4.5, 2]} color="blue" intensity={30} point />
      <PointLight position={[2, 4.5, -2]} color="yellow" intensity={30} point />
      <PointLight position={[-2, 4.5, -2]} color="green" intensity={30} point />

      <OrbitControls
        target={[0, 1.5, 0]} // Задайте желаемую точку в сцене
        minPolarAngle={Math.PI / 2} // Минимальный угол места (ограничение вращения вниз)
        maxPolarAngle={Math.PI / 2} // Максимальный угол места (ограничение вращения вверх)
        minDistance={2} // Минимальное расстояние (ограничение зума внутрь сцены)
        maxDistance={4} // Максимальное расстояние (ограничение зума наружу сцены)
        enablePan={false} // Отключение сдвига камеры
      />

      <Tree position={[0, 0, 0]} />
      {spheresArr.map(({ position, color, pointLight }, index) => (
        <Sphere
          key={index}
          position={position}
          color={color}
          pointLight={pointLight}
        />
      ))}
      {/* <Sphere position={[0.45, 1.45, 0.5]} color="blue" pointLight /> */}

      <Box position={[0, 2.5, 5]} rotation={[0, 0, 0]} />
      <Box position={[5, 2.5, 0]} rotation={[0, 1.57, 0]} />
      <Box position={[-5, 2.5, 0]} rotation={[0, 1.57, 0]} />
      <Box position={[0, 2.5, -5]} rotation={[0, 0, 0]} />

      <Floor position={[0, 0, 0]} rotation={[-1.57, 0, 0]} />
      <Floor2 position={[0, 5, 0]} rotation={[1.57, 0, 0]} />

      <Environment preset="forest" background />
    </Canvas>
  );
}

export default Scene;
