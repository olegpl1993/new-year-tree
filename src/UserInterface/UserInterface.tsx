import Music from "./Music/Music";
import Progressbar from "./Progressbar/Progressbar";
import SelectMenu from "./SelectMenu/SelectMenu";
import Settings from "./Settings/Settings";

function UserInterface() {
  return (
    <>
      <SelectMenu />
      <Music />
      <Settings />
      <Progressbar />
    </>
  );
}

export default UserInterface;
