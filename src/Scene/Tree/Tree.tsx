import { ThreeEvent, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

interface Props {
  position: [number, number, number];
  activeElement: boolean;
  setActiveElement: (activeElement: boolean) => void;
  setActiveElementPosition: (
    activeElementPosition: [number, number, number]
  ) => void;
}

function Tree(props: Props) {
  const {
    position,
    activeElement,
    setActiveElement,
    setActiveElementPosition,
  } = props;
  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    console.log(event.point.x, event.point.y, event.point.z);
    if (activeElement) {
      setActiveElement(!activeElement);
      setActiveElementPosition([event.point.x, event.point.y, event.point.z]);
    }
  };
  const fbx = useLoader(FBXLoader, "/models/tree/cgaxis_models_14_25.FBX");
  return (
    <primitive
      object={fbx}
      position={position}
      scale={0.02}
      onClick={handleClick}
    />
  );
}

export default Tree;
