import { useState } from "react";
import { Item } from "../types";
import "./SelectMenu.scss";

interface Props {
  addSphere: (sphere: Item) => void;
  deleteActiveItem: () => void;
}

function SelectMenu(props: Props) {
  const { addSphere, deleteActiveItem } = props;
  const [color, setColor] = useState("#ffffff");

  const handleClick = () => {
    addSphere({
      type: "sphere",
      position: [1, 1.5, 1],
      color,
      pointLight: true,
      activeElement: false,
    });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div className="selectMenu">
      <div className="selectMenu__colorPicker">
        <p className="selectMenu__colorPickerTitle">Select color</p>
        <input
          className="selectMenu__colorPickerInput"
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <button className="selectMenu__item" onClick={handleClick}>
        Sphere
      </button>
      <button className="selectMenu__item" onClick={deleteActiveItem}>
        Delete
      </button>
    </div>
  );
}

export default SelectMenu;
