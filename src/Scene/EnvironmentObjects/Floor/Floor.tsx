import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Floor(props: Props) {
  const { position, rotation } = props;
  const texture = useLoader(
    TextureLoader,
    "/textures/wood-1.jpg"
  );

  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial attach="material" map={texture} color={"#a0a0a0"} />
    </mesh>
  );
}

export default Floor;
