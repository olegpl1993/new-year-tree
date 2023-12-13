import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import PointLight from "./PointLight/PointLight";
import Tree from "./Tree/Tree";
import ItemModel from "./ItemModel/ItemModel";
import Box from "./Box/Box";
import Floor from "./Floor/Floor";
import Floor2 from "./Floor2/Floor2";
import Window from "./Window/Window";
import { Item } from "../types";
import Door from "./Door/Door";
import Poster from "./Poster/Poster";

interface Props {
  items: Item[];
  changeByIndex: (index: number, item: Item) => void;
}

function Scene(props: Props) {
  const { items, changeByIndex } = props;

  return (
    <Canvas shadows>
      <ambientLight intensity={0.5} />
      <PointLight position={[2, 4.5, 2]} color="red" intensity={30} point />
      <PointLight position={[-2, 4.5, 2]} color="blue" intensity={30} point />
      <PointLight position={[2, 4.5, -2]} color="yellow" intensity={30} point />
      <PointLight position={[-2, 4.5, -2]} color="green" intensity={30} point />

      <OrbitControls
        target={[0, 1.9, 0]}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={4}
        enablePan={false}
      />

      <Tree position={[0, 0, 0]} items={items} changeByIndex={changeByIndex} />
      {items.map((item, index) => (
        <ItemModel
          key={index}
          item={item}
          index={index}
          changeByIndex={changeByIndex}
        />
      ))}

      <Door position={[4.94, 1.75, 0]} rotation={[0, -1.57, 0]} />
      <Window position={[0, 2, -4.94]} rotation={[0, 0, 0]} />
      <Window position={[-4.94, 2, 0]} rotation={[0, 1.57, 0]} />
      <Poster position={[0, 2.5, 4.94]} rotation={[0, 3.14, 0]} />

      <Box position={[0, 2.5, 5]} rotation={[0, 0, 0]} />
      <Box position={[5, 2.5, 0]} rotation={[0, 1.57, 0]} />
      <Box position={[-5, 2.5, 0]} rotation={[0, 1.57, 0]} />
      <Box position={[0, 2.5, -5]} rotation={[0, 0, 0]} />

      <Floor position={[0, 0, 0]} rotation={[-1.57, 0, 0]} />
      <Floor2 position={[0, 5, 0]} rotation={[1.57, 0, 0]} />

      <Environment preset="lobby" background />
    </Canvas>
  );
}

export default Scene;
