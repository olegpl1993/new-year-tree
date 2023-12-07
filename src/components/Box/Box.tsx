import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Box(props: Props) {
  const { position, rotation } = props;
  const texture = useLoader(
    TextureLoader,
    "./src/components/Box/assets/brick-6.jpg"
  );

  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={[10, 5, 0.1]} />
      <meshStandardMaterial attach="material" map={texture} color={"#a0a0a0"} />
    </mesh>
  );
}

export default Box;
