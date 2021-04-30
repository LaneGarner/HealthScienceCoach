import { useEffect, useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { Header } from "./components/Header.jsx";
import { StoreContext } from "./Store";

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
};
