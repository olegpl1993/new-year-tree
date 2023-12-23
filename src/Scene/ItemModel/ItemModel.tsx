import { useStore } from "../../store/hook";
import { Item } from "../../types";
import Light from "./Light/Light";
import Sphere from "./Sphere/Sphere";
import Crystal from "./Сrystal/Crystal";

interface Props {
  item: Item;
  index: number;
}

function ItemModel(props: Props) {
  const { item, index } = props;
  const { dispatch } = useStore();

  const handleClick = () => {
    dispatch.items({
      type: "SET_ACTIVE_ITEM",
      payload: { index },
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
