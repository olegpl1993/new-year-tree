import { Item } from "../../types";

interface Props {
  item: Item;
  index: number;
  changeByIndex: (index: number, item: Item) => void;
}

function ItemModel(props: Props) {
  const { item, index, changeByIndex } = props;

  const handleClick = () => {
    changeByIndex(index, {
      ...item,
      activeElement: !item.activeElement,
    });
  };

  return (
    <group position={item.position} onClick={handleClick}>
      <mesh>
        <sphereGeometry args={[0.07, 10, 10]} />
        <meshStandardMaterial
          color={item.activeElement ? "black" : item.color}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default ItemModel;
