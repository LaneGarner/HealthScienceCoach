import { Social } from "./Social";

import "./Header.scss";

export const Header = () => {
    return (
        <header>
            <div className="header-top">
                <h1>
                    Health
                    <br /> Science
                    <br /> Coach
                </h1>
                <Social />
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="#episodes">Episodes</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#about">Sponsors</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
