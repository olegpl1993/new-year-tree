import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Tree from "./Tree/Tree";
import ItemModel from "./ItemModel/ItemModel";
import { Item } from "../types";
import EnvironmentObjects from "./EnvironmentObjects/EnvironmentObjects";
import { useStore } from "../store/hook";

interface Props {
  items: Item[];
  changeByIndex: (index: number, item: Item) => void;
}

function Scene(props: Props) {
  const { items, changeByIndex } = props;
  const { state } = useStore();

  const treeSizeToScale = (size: number) => {
    const minSize = 0;
    const maxSize = 100;
    const minScale = 0.02;
    const maxScale = 0.03;
    return (
      ((size - minSize) / (maxSize - minSize)) * (maxScale - minScale) +
      minScale
    );
  };

  return (
    <Canvas>
      <Tree
        position={[0, 0, 0]}
        scale={treeSizeToScale(state.settings.treeSize)}
        items={items}
        changeByIndex={changeByIndex}
      />

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
