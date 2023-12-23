import { useRef, useState } from "react";
import "./Music.scss";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";
import { useStore } from "../../store/hook";

function Music() {
  const { state } = useStore();

  const [isVolume, setIsVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsVolume(!isVolume);
  };

  if (audioRef.current) {
    audioRef.current.volume = state.settings.volume / 100;
  }

  if (isVolume) {
    audioRef.current?.play();
  } else {
    audioRef.current?.pause();
  }

  return (
    <>
      <div className="music">
        <IconButton onClick={handleClick} sx={{ color: "rgb(225, 97, 97)" }}>
          {isVolume ? <PauseIcon /> : <AudiotrackIcon />}
        </IconButton>
      </div>
      <audio ref={audioRef} loop>
        <source src="/music/rojdestvenmuz.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}

export default Music;
