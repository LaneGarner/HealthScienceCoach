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
      text-decoration-color: #2E828A;;
      &:hover {
        text-decoration-color: #2E828A;;
      }
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: center;
      padding: 0;
    }

    a {
      color: #333;
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
