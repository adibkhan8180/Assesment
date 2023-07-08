import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
import New from "./New";

ReactDOM.render(
  <BrowserRouter>
    {/* <ImageDisplay /> */}
    <New />
  </BrowserRouter>,
  document.getElementById("root")
);
