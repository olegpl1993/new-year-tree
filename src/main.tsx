import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { StoreProvider } from "./app/store/store.tsx";
import "./index.scss";
import "./shared/variables.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
);
