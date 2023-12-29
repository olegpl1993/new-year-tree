import FullScreen from "./FullScreen/FullScreen";
import Music from "./Music/Music";
import Progressbar from "./Progressbar/Progressbar";
import SelectMenu from "./SelectMenu/SelectMenu";
import Settings from "./Settings/Settings";

function UserInterface() {
  return (
    <>
      <SelectMenu />
      <Music />
      <FullScreen />
      <Settings />
      <Progressbar />
    </>
  );
}

export default UserInterface;
