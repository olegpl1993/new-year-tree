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

  const types = ["sphere", "light", "crystal"];
  const [selectedType, setSelectedType] = useState(0);

  const handleClick = () => {
    addSphere({
      type: types[selectedType],
      position: [1, 1.5, 1],
      color,
      activeElement: false,
    });
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const selectType = (selector: string) => {
    setSelectedType(
      selector === "<"
        ? (selectedType - 1 + types.length) % types.length
        : (selectedType + 1) % types.length
    );
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

      <div className="selectMenu__typePicker">
        <button
          className="selectMenu__typeSelector"
          onClick={() => selectType("<")}
        >
          {"<"}
        </button>

        <button className="selectMenu__item" onClick={handleClick}>
          {types[selectedType]}
        </button>

        <button
          className="selectMenu__typeSelector"
          onClick={() => selectType(">")}
        >
          {">"}
        </button>
      </div>

      <button className="selectMenu__item" onClick={deleteActiveItem}>
        delete
      </button>
    </div>
  );
}

export default SelectMenu;
