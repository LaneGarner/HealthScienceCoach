import { About } from "./pages/About";
import { Assets } from "./pages/Assets";
import { Contact } from "./pages/Contact";
import { Episodes } from "./pages/Episodes";
import { Home } from "./pages/Home";
import { Podcast } from "./components/Podcast";
// import { Sponsors } from "./pages/Sponsors";

import { Switch, Route } from "react-router";

export const Router = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/episodes" component={Episodes} />
      <Route exact path="/" component={Home} />
      <Route exact path="/podcast/:episode" component={Podcast} />
      <Route path="/assets" component={Assets} />
      {/* <Route path="/sponsors" component={Sponsors} /> */}
    </Switch>
  );
};
