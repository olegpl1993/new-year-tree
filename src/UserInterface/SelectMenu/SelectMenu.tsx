import "./SelectMenu.scss";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Button, IconButton } from "@mui/material";
import { useStore } from "../../store/hook";
import { itemsLimit, itemTypes } from "../../constants";

function SelectMenu() {
  const { state, dispatch } = useStore();
  const items = state.items.items;

  const [color, setColor] = useState("#ffffff");

  const [selectedType, setSelectedType] = useState(0);

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
    if (remainingItems[itemTypes[selectedType]] <= 0) return;

    dispatch.items({
      type: "ADD_ITEM",
      payload: {
        item: {
          type: itemTypes[selectedType],
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
        ? (selectedType - 1 + itemTypes.length) % itemTypes.length
        : (selectedType + 1) % itemTypes.length
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
            {remainingItems[itemTypes[selectedType]]}
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
              {itemTypes[selectedType]}
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
