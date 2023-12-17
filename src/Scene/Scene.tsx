import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Tree from "./Tree/Tree";
import ItemModel from "./ItemModel/ItemModel";
import { Item } from "../types";
import EnvironmentObjects from "./EnvironmentObjects/EnvironmentObjects";

interface Props {
  items: Item[];
  changeByIndex: (index: number, item: Item) => void;
}

function Scene(props: Props) {
  const { items, changeByIndex } = props;

  return (
    <Canvas>
      <Tree position={[0, 0, 0]} items={items} changeByIndex={changeByIndex} />

      {items.map((item, index) => (
        <ItemModel
          key={index}
          item={item}
          index={index}
          changeByIndex={changeByIndex}
        />
      ))}

      <OrbitControls
        target={[0, 1.75, 0]}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={4}
        enablePan={false}
      />

      <EnvironmentObjects />
      <Environment
        background
        resolution={82}
        children={<EnvironmentObjects environment />}
      />
    </Canvas>
  );
}

export default Scene;
