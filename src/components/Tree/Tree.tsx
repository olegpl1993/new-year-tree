import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

interface Props {
  position: [number, number, number];
}

function Tree(props: Props) {
  const { position } = props;
  const fbx = useLoader(
    FBXLoader,
    "/tree/cgaxis_models_14_25.FBX"
  );
  return (
    <group position={position}>
      <primitive object={fbx} position={position} scale={0.02} />
    </group>
  );
}

export default Tree;
