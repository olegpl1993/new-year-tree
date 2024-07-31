import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { IconButton } from "@mui/material";
import { useState } from "react";
import "./FullScreen.scss";

const fullScreenChanger = (isFullScreen: boolean) => {
  if (isFullScreen) {
    document.documentElement.requestFullscreen();
  }
  if (!isFullScreen && document.fullscreenElement) {
    document.exitFullscreen();
  }
};

function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(() => !isFullScreen);
    fullScreenChanger(!isFullScreen);
  };

  return (
    <div className="fullScreen">
      <IconButton onClick={handleClick} sx={{ color: "var(--primary-color)" }}>
        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </div>
  );
}

export default FullScreen;
