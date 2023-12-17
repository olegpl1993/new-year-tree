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

  if (item.type === "sphere") {
    return (
      <mesh position={item.position} onClick={handleClick}>
        <sphereGeometry args={[0.11, 11, 11]} />
        <meshStandardMaterial
          color={item.activeElement ? "black" : item.color}
          metalness={0.95}
          roughness={0.2}
        />
      </mesh>
    );
  }

  if (item.type === "light") {
    return (
      <group onClick={handleClick}>
        <pointLight position={item.position} intensity={1.5} color={item.color} />
        <mesh position={item.position}>
          <sphereGeometry args={[0.035, 5, 5]} />
          <meshStandardMaterial
            color={item.activeElement ? "black" : item.color}
          />
        </mesh>
      </group>
    );
  }

  if (item.type === "crystal") {
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
}

export default ItemModel;
