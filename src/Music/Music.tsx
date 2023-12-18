import { useRef, useState } from "react";
import "./Music.scss";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";

function Music() {
  const [isVolume, setIsVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setIsVolume(!isVolume);
  };

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
