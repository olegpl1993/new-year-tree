import { useState } from "react";
import "./SelectMenu.scss";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button, IconButton } from "@mui/material";
import { useStore } from "../../store/hook";

function SelectMenu() {
  const { state, dispatch } = useStore();
  const items = state.items.items;

  const [color, setColor] = useState("#ffffff");

  const types = ["sphere", "light", "crystal", "star"];
  const [selectedType, setSelectedType] = useState(0);

  const itemsLimit: Record<string, number> = {
    sphere: 20,
    light: 6,
    crystal: 15,
    star: 15,
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

    dispatch.items({
      type: "ADD_ITEM",
      payload: {
        item: {
          type: types[selectedType],
          position: [1, 2, 1],
          color,
          activeElement: true,
        },
      },
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

  const handleDeleteActiveItem = () => {
    dispatch.items({ type: "DELETE_ACTIVE_ITEM" });
  };

  return (
    <div className="selectMenu">
      <div className="selectMenu__visible">
        <IconButton onClick={handleVisible} sx={{ color: "rgb(225, 97, 97)" }}>
          {visible ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
        </IconButton>
      </div>

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
            <IconButton
              className="selectMenu__typeSelector"
              onClick={() => handleSelectType("<")}
              sx={{
                height: "37px",
                width: "37px",
                fontSize: "30px",
                color: "rgb(225, 97, 97)",
                fontFamily: "Arial",
              }}
            >
              {"<"}
            </IconButton>

            <Button
              onClick={handleAddItem}
              variant="contained"
              sx={{
                width: "75px",
                height: "60px",
                borderRadius: "20px",
                fontSize: "15px",
                fontFamily: "Pacifico",
                textTransform: "none",
                backgroundColor: "rgb(225, 97, 97)",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "rgb(225, 97, 97)",
                  boxShadow: "none",
                },
              }}
            >
              {types[selectedType]}
            </Button>

            <IconButton
              className="selectMenu__typeSelector"
              onClick={() => handleSelectType(">")}
              sx={{
                height: "37px",
                width: "37px",
                fontSize: "30px",
                color: "rgb(225, 97, 97)",
                fontFamily: "Arial",
              }}
            >
              {">"}
            </IconButton>
          </div>

          <Button
            onClick={handleDeleteActiveItem}
            variant="contained"
            sx={{
              width: "75px",
              height: "60px",
              borderRadius: "20px",
              fontSize: "15px",
              fontFamily: "Pacifico",
              textTransform: "none",
              backgroundColor: "rgb(225, 97, 97)",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "rgb(225, 97, 97)",
                boxShadow: "none",
              },
            }}
          >
            delete
          </Button>
        </div>
      )}
    </div>
  );
}

export default SelectMenu;
