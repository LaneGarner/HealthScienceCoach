import { Link, NavLink } from "react-router-dom";

import { Social } from "./Social";

import "./Header.scss";

export const Header = () => {
    return (
        <header>
            <div className="header-top">
                <Link to="/">
                    <h1>
                        Health
                        <br /> Science
                        <br /> Coach
                    </h1>
                </Link>
                <Social />
            </div>

            <nav>
                <ul>
                    <li>
                        <NavLink
                            exact={true}
                            activeClassName="is-active"
                            to="/"
                            // data-text="Home"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" to="/episodes">
                            Episodes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" to="/sponsors">
                            Sponsors
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="is-active" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
