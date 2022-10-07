import { FaChevronDown } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";
import { useToggle } from "../hooks/useToggle";

export const MobileMenu = ({items}) => {
  const {isToggled: isOpen, toggle: toggleMenu} = useToggle();

  return (
    <>
      <MobileMenuStyled isOpen={isOpen}>
      <HamburgerStyled aria-label="expand menu" aria-expanded={isOpen} onClick={toggleMenu}>
        <FaChevronDown color="#333" style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform ease-in-out 100ms'}} />
      </HamburgerStyled>
          <ul>
            {items.map((menuItem, i) => (
                <li key={i}>
                  <NavLink
                    exact={menuItem.exact}
                    activeClassName="is-active"
                    to={menuItem.to}
                    onClick={toggleMenu}
                    // data-text="Home"
                  >
                    {menuItem.title}
                  </NavLink>
                </li>
            ))}
          </ul>
      </MobileMenuStyled>
    </>
  );
};

const HamburgerStyled = styled.button`
  align-items: center;
  background-color: #fafafa;
  border-radius: 0.3rem;
  border: 1px solid #dadada;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 1rem;
  margin-top: 0.75rem;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 3rem;
  z-index: 101;
`;

export const MobileMenuStyled = styled.nav`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 102;
    padding-top: 4em;
    max-height: ${(props) => props.isOpen ? 'auto' : '3rem'};

    .is-active {
      text-decoration-color: #2E828A;;
      &:hover {
        text-decoration-color: #2E828A;;
      }
    }

    ul {
      align-items: flex-end;
      backdrop-filter: blur(5px);
      background-color: #ffffffe3;
      border-radius: 0.3rem;
      border: 1px solid #dadada;
      display: flex;
      flex-direction: column;
      list-style: none;
      margin-right: 1rem;
      margin-top: 0.25rem;
      padding-left: 2rem;
      padding: 0.25rem;
      transform: ${(props) => !props.isOpen ? 'translateX(100vw)' : 'translateX(0px)'};
      transition: transform ease-in-out 220ms;
      height: 100vh;
      width: 95vw;
    }

    a {
      text-decoration-color: transparent;
      color: #333;
      padding: 1rem;
      &:hover {
        color: #454545;
      }
    }

    li {
      padding-block: 1em;
      font-size: 1.1rem;
      text-align: right;
      &:nth-last-of-type(1) {
        padding-right: 0;
      }
    }
`;
