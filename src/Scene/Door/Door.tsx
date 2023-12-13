import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Door(props: Props) {
  const { position, rotation } = props;
  const texture = useLoader(TextureLoader, "/textures/door.jpg");

  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[1.85, 3.5]} />
      <meshStandardMaterial attach="material" map={texture} color={"#a0a0a0"} />
    </mesh>
  );
}

export default Door;
