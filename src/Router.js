import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Episodes } from "./pages/Episodes";
// import { Sponsors } from "./pages/Sponsors";
import { Podcast } from "./components/Podcast";

import { Switch, Route } from "react-router";

export const Router = () => {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/episodes" component={Episodes} />
      <Route exact path="/" component={Home} />
      <Route exact path="/podcast/:episode" component={Podcast} />
      {/* <Route path="/sponsors" component={Sponsors} /> */}
    </Switch>
  );
};
