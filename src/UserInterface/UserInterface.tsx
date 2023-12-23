import Music from "./Music/Music";
import SelectMenu from "./SelectMenu/SelectMenu";
import Settings from "./Settings/Settings";

function UserInterface() {
  return (
    <>
      <SelectMenu />
      <Music />
      <Settings />
    </>
  );
}

export default UserInterface;
