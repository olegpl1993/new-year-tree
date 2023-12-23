import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Tree from "./Tree/Tree";
import ItemModel from "./ItemModel/ItemModel";
import EnvironmentObjects from "./EnvironmentObjects/EnvironmentObjects";
import { useStore } from "../store/hook";

function Scene() {
  const { state } = useStore();
  const items = state.items.items;

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
      />

      {items.map((item, index) => (
        <ItemModel
          key={index}
          item={item}
          index={index}
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
        resolution={256}
        children={<EnvironmentObjects environment />}
      />
    </Canvas>
  );
}

export default Scene;
