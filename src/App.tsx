import { Suspense } from "react";
import "./App.scss";
import Scene from "./Scene/Scene";
import SelectMenu from "./SelectMenu/SelectMenu";
import Spinner from "./Spinner/Spinner";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <div className="app__sceneWrapper">
          <Suspense fallback={<Spinner />}>
            <Scene />
          </Suspense>
        </div>
        <SelectMenu />
        <Music />
        <Settings />
      </div>
    </div>
  );
}

export default App;
