import { Link } from "react-router-dom";

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
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/episodes">Episodes</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/sponsors">Sponsors</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
