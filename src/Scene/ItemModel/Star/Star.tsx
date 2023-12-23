import { ExtrudeGeometry, Shape } from "three";
import { Item } from "../../../types";
import { useFrame } from "@react-three/fiber";

interface Props {
  item: Item;
  handleClick: () => void;
}

function Star(props: Props) {
  const { item, handleClick } = props;

  const starShape = new Shape();
  starShape.moveTo(0, 0.5);
  starShape.lineTo(0.15, 0.15);
  starShape.lineTo(0.5, 0.1);
  starShape.lineTo(0.25, -0.2);
  starShape.lineTo(0.4, -0.6);
  starShape.lineTo(0, -0.35);
  starShape.lineTo(-0.4, -0.6);
  starShape.lineTo(-0.25, -0.2);
  starShape.lineTo(-0.5, 0.1);
  starShape.lineTo(-0.15, 0.15);

  const geometry = new ExtrudeGeometry(starShape, {
    depth: 0.15,
    bevelEnabled: false,
  });

  const rotationOptions = {
    direction: Math.random() > 0.5 ? 1 : -1,
    rndYRotation: Math.random() * Math.PI * 2,
  };

  useFrame(() => {
    geometry.rotateY(0.005 * rotationOptions.direction);
  });

  return (
    <mesh
      geometry={geometry}
      position={item.position}
      onClick={handleClick}
      rotation={[0, rotationOptions.rndYRotation, 0]}
      scale={0.18}
    >
      <meshStandardMaterial
        color={item.activeElement ? "black" : item.color}
        metalness={0.95}
        roughness={0.3}
      />
    </mesh>
  );
}

export default Star;
