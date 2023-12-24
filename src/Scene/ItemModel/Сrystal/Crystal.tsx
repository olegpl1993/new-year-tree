import { OctahedronGeometry } from "three";
import { Item } from "../../../types";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

interface Props {
  item: Item;
  handleClick: () => void;
}

function Crystal(props: Props) {
  const { item, handleClick } = props;

  const [rotationOptions] = useState({
    direction: Math.random() > 0.5 ? 1 : -1,
    rndYRotation: Math.random() * Math.PI * 2,
  });

  const geometryRef = useRef(new OctahedronGeometry(0.12, 0));

  useFrame(() => {
    geometryRef.current.rotateY(0.003 * rotationOptions.direction);
  });

  return (
    <mesh
      geometry={geometryRef.current}
      position={item.position}
      onClick={handleClick}
      rotation={[0, rotationOptions.rndYRotation, 0]}
    >
      <meshStandardMaterial
        color={item.activeElement ? "black" : item.color}
        metalness={0.95}
        roughness={0.3}
      />
    </mesh>
  );
}

export default Crystal;
