import { About } from "./pages/About";
import { Home } from "./pages/Home";

import { Switch, Route, Redirect } from "react-router";

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    );
};
