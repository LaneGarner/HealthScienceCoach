import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Episodes } from "./pages/Episodes";
import { Sponsors } from "./pages/Sponsors";
import { Podcast } from "./components/Podcast";

import { Switch, Route } from "react-router";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/sponsors" component={Sponsors} />
            <Route path="/episodes" component={Episodes} />
            <Route exact path="/podcast/:episode" component={Podcast} />
        </Switch>
    );
};
