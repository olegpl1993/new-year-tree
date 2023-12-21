import { Suspense, useState } from "react";
import "./App.scss";
import Scene from "./Scene/Scene";
import SelectMenu from "./SelectMenu/SelectMenu";
import { Item } from "./types";
import Spinner from "./Spinner/Spinner";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    items.map((item) => {
      if (item.activeElement) {
        item.activeElement = false;
      }
    });
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
          <Suspense fallback={<Spinner />}>
            <Scene items={items} changeByIndex={changeByIndex} />
          </Suspense>
        </div>
        <SelectMenu
          addItem={addItem}
          deleteActiveItem={deleteActiveItem}
          items={items}
        />
        <Music />
        <Settings />
      </div>
    </div>
  );
}

export default App;
