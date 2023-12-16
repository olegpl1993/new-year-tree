import { useRef, useState } from "react";
import "./Music.scss";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PauseIcon from "@mui/icons-material/Pause";

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
      <button className="music" onClick={handleClick}>
        {isVolume ? <PauseIcon /> : <AudiotrackIcon />}
      </button>
      <audio ref={audioRef} loop>
        <source src="/music/rojdestvenmuz.mp3" type="audio/mp3" />
      </audio>
    </>
  );
}

export default Music;
