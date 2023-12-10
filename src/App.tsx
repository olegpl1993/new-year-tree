import "./App.scss";
import Scene from "./Scene/Scene";

function App() {
  return (
    <div className="app">
      <div className="app__wrapper">
        <h1 className="app__title">New Year Tree</h1>
        <div className="app__canvasWrapper">
          <Scene />
          
        </div>
      </div>
    </div>
  );
}

export default App;
