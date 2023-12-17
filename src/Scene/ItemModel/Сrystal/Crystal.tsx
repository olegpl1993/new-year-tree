import { Item } from "../../../types";

interface Props {
  item: Item;
  handleClick: () => void;
}

function Crystal(props: Props) {
  const { item, handleClick } = props;
  return (
    <mesh position={item.position} onClick={handleClick}>
    <octahedronGeometry args={[0.13, 0]} />
    <meshStandardMaterial
      color={item.activeElement ? "black" : item.color}
      metalness={0.95}
      roughness={0.15}
    />
  </mesh>
  );
}

export default Crystal;
