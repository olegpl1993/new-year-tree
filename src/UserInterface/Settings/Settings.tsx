import "./Settings.scss";
import { IconButton, Slider } from "@mui/material";
import { useEffect, useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import { VolumeDown } from "@mui/icons-material";
import { useStore } from "../../store/hook";

function Modal() {
  const { state, dispatch } = useStore();
  const light = state.settings.light;
  const volume = state.settings.volume;
  const treeSize = state.settings.treeSize;

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    document.body.style.overflow = modalActive ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  const handleChangeVolume = (_event: Event, newValue: number | number[]) => {
    dispatch.settings({ type: "SET_VOLUME", payload: newValue as number });
  };

  const handleChangeTreeSize = (_event: Event, newValue: number | number[]) => {
    dispatch.settings({ type: "SET_TREE_SIZE", payload: newValue as number });
  };

  const handleChangeLight = (_event: Event, newValue: number | number[]) => {
    dispatch.settings({ type: "SET_LIGHT", payload: newValue as number });
  };

  return (
    <div className="settings">
      <div className="settings__openButton">
        <IconButton
          onClick={() => setModalActive(true)}
          sx={{ color: "rgb(225, 97, 97)" }}
        >
          <SettingsIcon />
        </IconButton>
      </div>

      {modalActive && (
        <div
          className="settings__wrapper"
          onClick={() => setModalActive(false)}
        >
          <div
            className="settings__box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              className="settings__close"
              onClick={() => setModalActive(false)}
            />

            <div className="settings__content">
              <div className="settings__title">Settings</div>

              <div className="settings__layer">
                <div className="settings__row">
                  <p className="settings__subtitle">
                    <VolumeDown
                      fontSize="large"
                      sx={{ color: "rgb(225, 97, 97)" }}
                    />
                  </p>

                  <Slider
                    aria-label="Volume"
                    value={volume}
                    onChange={handleChangeVolume}
                    sx={{ color: "rgb(225, 97, 97)" }}
                  />

                  <p className="settings__value">{volume}%</p>
                </div>

                <div className="settings__row">
                  <p className="settings__subtitle">Tree size</p>

                  <Slider
                    aria-label="Volume"
                    value={treeSize}
                    onChange={handleChangeTreeSize}
                    sx={{ color: "rgb(225, 97, 97)" }}
                  />

                  <p className="settings__value">{treeSize}%</p>
                </div>

                <div className="settings__row">
                  <p className="settings__subtitle">Light</p>

                  <Slider
                    aria-label="Volume"
                    value={light}
                    onChange={handleChangeLight}
                    sx={{ color: "rgb(225, 97, 97)" }}
                  />

                  <p className="settings__value">{light}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
