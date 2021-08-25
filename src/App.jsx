import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { Header } from "./components/Header.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
};
