import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

import { Social } from "./Social";

// import "./Header.scss";

export const Header = () => {
  return (
    <HeaderStyled>
      <div style={{ width: "200px", height: "18px", backgroundColor: "red", marginBottom: "5px", marginLeft: "15px", borderRadius: "2px" }} />
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
          {/* <li>
            <NavLink activeClassName="is-active" to="/sponsors">
              Sponsors
            </NavLink>
          </li> */}
          <li>
            <NavLink activeClassName="is-active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
    margin-top: 1em;
    padding-bottom: 2em;

    h1 {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 2em;
    }

    .header-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      justify-items: center;
      margin-bottom: 1em;
      a {
        text-decoration: none;
        color: black;
      }
      h1 {
        padding: 0 20px 0;
        margin: 0;
      }
      .social-links {
        padding: 0;
        margin-right: 1em;
        margin-top: 1em;
        svg {
          font-size: 1.9em;
          margin: auto 0.4em;
          color: #666;
          &:hover {
            color: dodgerblue;
          }
        }
      }
    }

    .is-active {
      color: dodgerblue;
      &:hover {
        color: dodgerblue;
      }
    }
  }

  nav {
    position: sticky;
    ul {
      list-style: none;
      display: flex;
      justify-content: center;

      a {
        text-decoration: none;
        color: black;
        &:hover {
          color: #454545;
        }
      }
    }
    li {
      padding-right: 3em;
      font-size: 1.1em;
      &:nth-last-of-type(1) {
        padding-right: 0;
      }
    }
`;
