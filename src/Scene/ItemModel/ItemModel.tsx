import { useStore } from "../../app/store/useStore";
import { Item } from "../../shared/types";
import Light from "./Light/Light";
import Sphere from "./Sphere/Sphere";
import Star from "./Star/Star";
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

  if (item.type === "star") {
    return <Star item={item} handleClick={handleClick} />;
  }
}

export default ItemModel;
