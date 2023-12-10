import { useState } from "react";
import "./App.scss";
import Scene from "./Scene/Scene";
import SelectMenu from "./SelectMenu/SelectMenu";
import { Items, Sphere } from "./types";

function App() {
  const [items, setItems] = useState<Items>([
    { position: [0.45, 1.45, 0.5], color: "blue", pointLight: true },
    { position: [-0.45, 1.45, -0.5], color: "blue", pointLight: true },
    { position: [0.45, 1.45, -0.5], color: "blue", pointLight: true },
  ]);

  const addSphere = (sphere: Sphere) => {
    setItems([...items, sphere]);
  };

  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__title">New Year Tree</h1>
        <div className="app__sceneWrapper">
          <Scene items={items} />
        </div>
        <SelectMenu addSphere={addSphere} />
      </div>
    </div>
  );
}

export default App;
