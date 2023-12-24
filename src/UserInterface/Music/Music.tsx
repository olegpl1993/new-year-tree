import { useEffect, useRef, useState } from "react";
import "./Music.scss";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";
import { useStore } from "../../store/hook";

function Music() {
  const { state } = useStore();
  const isWin = state.game.isWin;
  const volume = state.settings.volume;

  const [isMusicPlay, setIsMusicPlay] = useState(false);
  const audioRef = useRef(new Audio("/music/muz.mp3"));
  audioRef.current.loop = true;
  audioRef.current.volume = volume / 100;
  if (isMusicPlay) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }

  useEffect(() => {
    if (isWin) {
      audioRef.current.src = "/music/win.mp3";
      setIsMusicPlay(true);
    }
  }, [isWin]);

  const handleClick = () => {
    setIsMusicPlay((currentState) => !currentState);
  };

  return (
    <div className="music">
      <IconButton onClick={handleClick} sx={{ color: "rgb(225, 97, 97)" }}>
        {isMusicPlay ? <PauseIcon /> : <AudiotrackIcon />}
      </IconButton>
    </div>
  );
}

export default Music;
