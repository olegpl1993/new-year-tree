import { useState } from "react";
import "./App.scss";
import Scene from "./Scene/Scene";
import SelectMenu from "./SelectMenu/SelectMenu";
import { Item } from "./types";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addSphere = (item: Item) => {
    setItems([...items, item]);
  };

  const deleteActiveItem = () => {
    const newItems = [...items];
    newItems.forEach((item, index) => {
      if (item.activeElement) {
        newItems.splice(index, 1);
      }
    });
    setItems(newItems);
  };

  const changeByIndex = (index: number, item: Item) => {
    items.map((item) => {
      if (item.activeElement) {
        item.activeElement = false;
      }
    });
    const newItems = [...items];
    newItems[index] = item;
    setItems(newItems);
  };

  return (
    <div className="app">
      <div className="app__wrapper">
        <div className="app__sceneWrapper">
          <Scene items={items} changeByIndex={changeByIndex} />
        </div>
        <SelectMenu addSphere={addSphere} deleteActiveItem={deleteActiveItem} />
      </div>
    </div>
  );
}

export default App;
