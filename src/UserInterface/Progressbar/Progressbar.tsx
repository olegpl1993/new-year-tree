import ParkIcon from "@mui/icons-material/Park";
import { useEffect, useState } from "react";
import { useStore } from "../../app/store/useStore";
import { ITEMS_LIMIT } from "../../shared/constants";
import "./Progressbar.scss";

function Progressbar() {
  const { state } = useStore();
  const isWin = state.game.isWin;
  const items = state.items.items;

  const [progress, setProgress] = useState(0);

  const maxItemsAtScene = Object.values(ITEMS_LIMIT).reduce(
    (acc, qty) => acc + qty,
    0
  );

  useEffect(() => {
    setProgress((items.length / maxItemsAtScene) * 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  if (!isWin) {
    return (
      <div className="progressbar">
        <div
          className="progressbar__progress"
          style={{ width: `${progress}%` }}
        />
        <div
          className="progressbar__icon"
          style={{ left: `${progress - 10}%` }}
        >
          <ParkIcon sx={{ color: "var(--primary-color)", fontSize: "26px" }} />
        </div>
      </div>
    );
  }
}

export default Progressbar;
