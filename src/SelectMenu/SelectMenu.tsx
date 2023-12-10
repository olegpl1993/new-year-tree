import { useState } from "react";
import { Sphere } from "../types";
import "./SelectMenu.scss";

interface Props {
  addSphere: (sphere: Sphere) => void;
}

function SelectMenu(props: Props) {
  const { addSphere } = props;
  const [color, setColor] = useState("#ffffff");

  const handleClick = () => {
    addSphere({
      position: [-0.45, 1.45, 0.5],
      color,
      pointLight: true,
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
    </div>
  );
}

export default SelectMenu;
