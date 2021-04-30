import React from "react";
import ReactDOM from "react-dom";

import { StoreProvider } from "./Context.js";
import { App } from "./App.jsx";

import "./index.scss";

ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById("root")
);
