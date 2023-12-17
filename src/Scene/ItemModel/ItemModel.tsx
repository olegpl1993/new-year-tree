import { Item } from "../../types";
import Light from "./Light/Light";
import Sphere from "./Sphere/Sphere";
import Crystal from "./Сrystal/Crystal";

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
    return <Sphere item={item} handleClick={handleClick} />;
  }

  if (item.type === "light") {
    return <Light item={item} handleClick={handleClick} />;
  }

  if (item.type === "crystal") {
    return <Crystal item={item} handleClick={handleClick} />;
  }
}

export default ItemModel;
