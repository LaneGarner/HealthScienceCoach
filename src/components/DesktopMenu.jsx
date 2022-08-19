import {  NavLink } from "react-router-dom";
import styled from "styled-components";

export const DesktopMenu = ({items}) => {
   
  return (
    <MenuStyled>
        <ul>
          {items.map((menuItem, i) => (
              <li key={i}>
                <NavLink
                  exact={menuItem.exact}
                  activeClassName="is-active"
                  to={menuItem.to}
                  // data-text="Home"
                >
                  {menuItem.title}
                </NavLink>
              </li>
          ))}
        </ul>
    </MenuStyled>
  );
};

export const MenuStyled = styled.nav`
    .is-active {
      color: #2E828A;
      text-decoration-color: #454545;
      &:hover {
        color: #2E828A;
        text-decoration-color: #454545;
      }
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: #333;
      text-decoration: underline;
      text-decoration-color: transparent;
      &:hover {
        color: #454545;
        text-decoration-color: #454545;
      }
      transition: text-decoration-color linear 150ms;
    }

    li {
      padding-right: 3em;
      font-size: 1.1em;
      &:nth-last-of-type(1) {
        padding-right: 0;
      }
    }
`;
