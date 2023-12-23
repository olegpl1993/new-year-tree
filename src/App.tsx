import "./App.scss";
import { Suspense } from "react";
import Scene from "./Scene/Scene";
import Spinner from "./Spinner/Spinner";
import UserInterface from "./UserInterface/UserInterface";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <div className="app__sceneWrapper">
          <Suspense fallback={<Spinner />}>
            <Scene />
          </Suspense>
        </div>
        <UserInterface />
      </div>
    </div>
  );
}

export default App;
