import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "./FullScreen.scss";

function FullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement
  );

  useEffect(() => {
    if (isFullScreen && !document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (!isFullScreen && document.fullscreenElement) {
      document.exitFullscreen();
    }
  }, [isFullScreen]);

  useEffect(() => {
    const onFullScreenChange = () =>
      setIsFullScreen(!!document.fullscreenElement);

    document.addEventListener("fullscreenchange", onFullScreenChange);
    document.addEventListener("keydown", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullScreenChange);
      document.removeEventListener("keydown", handleFullScreenChange);
    };
  }, []);

  const handleFullScreenChange = (e: KeyboardEvent) => {
    if (e.key === "F11") {
      e.preventDefault();
      setIsFullScreen((prev) => !prev);
    }
  };

  return (
    <div className="fullScreen">
      <IconButton
        onClick={() => setIsFullScreen((prev) => !prev)}
        sx={{ color: "var(--primary-color)" }}
      >
        {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </div>
  );
}

export default FullScreen;
