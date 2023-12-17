import { useState } from "react";
import { Item } from "../types";
import "./SelectMenu.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

interface Props {
  addItem: (sphere: Item) => void;
  deleteActiveItem: () => void;
  items: Item[];
}

function SelectMenu(props: Props) {
  const { addItem, deleteActiveItem, items } = props;
  const [color, setColor] = useState("#ffffff");

  const types = ["sphere", "light", "crystal"];
  const [selectedType, setSelectedType] = useState(0);

  const itemsLimit: Record<string, number> = {
    sphere: 10,
    light: 10,
    crystal: 10,
  };

  const intemsAtScene: Record<string, number> = items.reduce(
    (acc, item) => ({ ...acc, [item.type]: (acc[item.type] || 0) + 1 }),
    {} as Record<string, number>
  );

  const remainingItems: Record<string, number> = Object.keys(itemsLimit).reduce(
    (acc, type) => ({
      ...acc,
      [type]: itemsLimit[type] - (intemsAtScene[type] || 0),
    }),
    {} as Record<string, number>
  );

  const handleAddItem = () => {
    if (remainingItems[types[selectedType]] <= 0) return;
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

  const handleSelectType = (selector: string) => {
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
          <div className="selectMenu__itemsLimit">
            {remainingItems[types[selectedType]]}
          </div>

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
              onClick={() => handleSelectType("<")}
            >
              {"<"}
            </button>

            <button className="selectMenu__item" onClick={handleAddItem}>
              {types[selectedType]}
            </button>

            <button
              className="selectMenu__typeSelector"
              onClick={() => handleSelectType(">")}
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
