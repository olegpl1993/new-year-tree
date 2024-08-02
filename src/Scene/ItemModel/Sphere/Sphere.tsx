import { Item } from "../../../shared/types";

interface Props {
  item: Item;
  handleClick: () => void;
}

function Sphere(props: Props) {
  const { item, handleClick } = props;
  return (
    <mesh position={item.position} onClick={handleClick}>
      <sphereGeometry args={[0.11, 11, 11]} />
      <meshStandardMaterial
        color={item.activeElement ? "black" : item.color}
        metalness={0.95}
        roughness={0.15}
      />
    </mesh>
  );
}

export default Sphere;
