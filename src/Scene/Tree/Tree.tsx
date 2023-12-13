import { ThreeEvent, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { Item } from "../../types";

interface Props {
  position: [number, number, number];
  items: Item[];
  changeByIndex: (index: number, item: Item) => void;
}

function Tree(props: Props) {
  const { position, items, changeByIndex } = props;
  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    items.map((item, index) => {
      if (item.activeElement) {
        changeByIndex(index, {
          ...item,
          position: [event.point.x, event.point.y, event.point.z],
          activeElement: false,
        });
      }
    });
  };

  const fbx = useLoader(FBXLoader, "/models/tree/cgaxis_models_14_25.FBX");
  return (
    <primitive
      object={fbx}
      position={position}
      scale={0.025}
      onClick={handleClick}
    />
  );
}

export default Tree;
