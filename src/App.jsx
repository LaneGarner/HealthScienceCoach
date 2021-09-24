import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { Header } from "./components/Header.jsx";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Router />
    </BrowserRouter>
  );
};
