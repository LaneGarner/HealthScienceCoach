import { BrowserRouter } from "react-router-dom";
import ReactGA from 'react-ga';

import { Router } from "./Router";
import { Header } from "./components/Header.jsx";
import { ScrollToTop } from "./components/ScrollToTop";

export const App = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Router />
    </BrowserRouter>
  );
};
