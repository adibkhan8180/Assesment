import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";

ReactDOM.render(
    <BrowserRouter>
        <ImageDisplay />
    </BrowserRouter>,
    document.getElementById("root")
);