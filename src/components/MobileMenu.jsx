import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";

export const MobileMenu = ({items}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <MobileMenuStyled isOpen={isOpen}>
      <HamburgerStyled aria-label="expand menu" aria-expanded={isOpen} onClick={toggleMenu}>
        <FaChevronDown style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform ease-in-out 100ms'}} />
      </HamburgerStyled>
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
      </MobileMenuStyled>
    </>
  );
};

const HamburgerStyled = styled.button`
  position: fixed;
  cursor: pointer;
  right: 0;
  top: 0;
  margin: 1rem;
  z-index: 101;
  padding: 1rem;
  background-color: #fafafa;
  border: 1px solid #dadada;
  width: 3rem;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenuStyled = styled.nav`
    position: fixed;
    right: 0;
    top: 0;
    z-index: 100;
    padding-top: 4em;

    ul {
      list-style: none;
      display: flex;
      margin-right: 1rem;
      gap: 1rem;
      padding: 0.25rem;
      padding-left: 2rem;
      margin-top: 0.2rem;
      flex-direction: column;
      backdrop-filter: blur(5px);
      align-items: flex-end;
      background-color: #ffffffe3;
      border: 1px solid #dadada;
      transform: ${props=> !props.isOpen ? 'translateX(1000px)' : 'translateX(0px)'};
      transition: transform linear 200ms;
      border-radius: 0.3rem;
    }

    a {
      text-decoration: none;
      color: #333;
      padding: 1rem;
      &:hover {
        color: #454545;
      }
    }

    li {
      padding-block: 1em;
      font-size: 1.1em;
      text-align: right;
      &:nth-last-of-type(1) {
        padding-right: 0;
      }
    }
`;
