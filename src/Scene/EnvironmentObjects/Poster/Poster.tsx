import { useLoader } from "@react-three/fiber";
import { RepeatWrapping, TextureLoader } from "three";

interface Props {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Poster(props: Props) {
  const { position, rotation } = props;
  const texture = useLoader(TextureLoader, "/textures/genshin-poster.jpg");

  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(1, 1);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[5.5, 4]} />
      <meshStandardMaterial attach="material" map={texture} color={"#a0a0a0"} />
    </mesh>
  );
}

export default Poster;
