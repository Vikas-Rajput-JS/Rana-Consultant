import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Store, persistor } from "./Store.js";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App className="scrollbar" id={"style-13"} />
        </React.StrictMode>
      </PersistGate>
    </Provider>
    ,
  </BrowserRouter>
);
