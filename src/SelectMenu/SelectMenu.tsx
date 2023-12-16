import { useState } from "react";
import { Item } from "../types";
import "./SelectMenu.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

interface Props {
  addItem: (sphere: Item) => void;
  deleteActiveItem: () => void;
}

function SelectMenu(props: Props) {
  const { addItem, deleteActiveItem } = props;
  const [color, setColor] = useState("#ffffff");

  const types = ["sphere", "light", "crystal"];
  const [selectedType, setSelectedType] = useState(0);

  const handleClick = () => {
    addItem({
      type: types[selectedType],
      position: [1, 2, 1],
      color,
      activeElement: true,
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

  const [visible, setVisible] = useState(true);
  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="selectMenu">
      <button className="selectMenu__visible" onClick={handleVisible}>
        {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
      </button>

      {visible && (
        <div className="selectMenu__wrapper">
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
      )}
    </div>
  );
}

export default SelectMenu;
