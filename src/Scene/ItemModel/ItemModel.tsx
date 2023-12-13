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
        <sphereGeometry args={[0.09, 12, 12]} />
        <meshStandardMaterial
          color={item.activeElement ? "black" : item.color}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    );
  }

  if (item.type === "light") {
    return (
      <group onClick={handleClick}>
        <pointLight position={item.position} intensity={1} color={item.color} />
        <mesh position={item.position}>
          <sphereGeometry args={[0.03, 7, 7]} />
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
        <octahedronGeometry args={[0.1, 0]} />
        <meshStandardMaterial
          color={item.activeElement ? "black" : item.color}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    );
  }
}

export default ItemModel;
