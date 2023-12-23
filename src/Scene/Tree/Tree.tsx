import { ThreeEvent, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { useStore } from "../../store/hook";

interface Props {
  position: [number, number, number];
  scale: number;
}

function Tree(props: Props) {
  const { position, scale } = props;
  const { state, dispatch } = useStore();
  const items = state.items.items;
  const itemsHasActiveElement = items.some((item) => item.activeElement);

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    if (itemsHasActiveElement) {
      dispatch.items({
        type: "MOVE_ACTIVE_ITEM",
        payload: { position: [event.point.x, event.point.y, event.point.z] },
      });
    }
  };

  const fbx = useLoader(FBXLoader, "/models/tree/cgaxis_models_14_25.FBX");
  return (
    <primitive
      object={fbx}
      position={position}
      scale={scale}
      onClick={handleClick}
    />
  );
}

export default Tree;
