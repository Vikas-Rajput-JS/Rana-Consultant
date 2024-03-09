import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Store from "./Store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={Store}>
      <React.StrictMode>
        <App className="scrollbar" id={"style-13"} />
      </React.StrictMode>
    </Provider>
    ,
  </BrowserRouter>
);
