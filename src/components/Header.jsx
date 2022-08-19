import { Link } from "react-router-dom";
import styled from "styled-components";

import { Social } from "./Social";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useIsMobile } from "../hooks/useIsMobile";

// import "./Header.scss";

const MENU_ITEMS = [
  {
    title: 'Home',
    to: "/",
    exact: true,
  },
  {
    title: 'Episodes',
    to: "/episodes",
  },
  {
    title: 'About',
    to: "/about",
  },
  // {
  //   title: 'Sponsors',
  //   to: "/sponsors"
  // },
  {
    title: 'Contact',
    to: "/contact",
  },
]

export const WIDTH = '776'

export const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <HeaderStyled isMobile={isMobile}>
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
      {isMobile ? 
        <MobileMenu items={MENU_ITEMS}/>  : 
        <DesktopMenu items={MENU_ITEMS} />
      }
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
    margin-top: 1em;
    /* padding-bottom: 2em; */
    /* position: relative; */

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
      @media(max-width: ${WIDTH}px) {
        flex-direction: column;
        gap: 1em;
        margin-bottom: 0;
      }
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
        margin-right: ${(props)=> props.isMobile ? 0 : '1em'};
        width: 100%;
        display: flex;
        justify-content: ${(props)=> props.isMobile ? 'center' : 'end'};

        svg {
          font-size: 1.9em;
          margin: auto 0.4em;
          color: #666;
          &:hover {
            color: #2E828A;
          }
        }
        
      }
    }

    .is-active {
      /* color: #2E828A; */
      &:hover {
        /* color: #2E828A; */
      }
    }
`;
