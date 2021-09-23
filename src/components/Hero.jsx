import styled from "styled-components";

import { Fancy } from "./Fancy";
import Graduation from "../img/graduation.jpg";
import { theme, SmallScreen } from "../theme";

export const Hero = () => {
  console.log("theme", theme.breakpoints.lg);
  return (
    <HeroContainer theme={theme}>
      <div className="graduation">
        <p className="tagline">Helping students and parents learn about pathways into health care and sports medicine careers</p>
        {/* TODO: SMALLER IMAGE */}
        <SmallScreen>
          <img style={{ width: "90%" }} src={Graduation} alt="Graduation" />;
        </SmallScreen>

        <Fancy>
          <div className="focus-list">
            <div className="focus-list-right">
              <ul>
                <li>Careers in Healthcare and Sports Medicine</li>
                <li>Student Experiences in High School and College</li>
                <li>University and College programs and degrees</li>
                <li>Non-Traditional pathways</li>
                <li>Continuing Education Units</li>
                <li>Health Career Events, and more</li>
              </ul>
            </div>
          </div>
        </Fancy>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.div.attrs((props) => ({ theme: props.theme }))`
  display: flex;
  flex-direction: column;
  align-items: center;

  .tagline {
    margin-top: 2em;
    font-size: 40px;
    font-weight: 800;
    font-family: "Inter", sans-serif;
    color: white;
    background: rgba(0, 0, 0, 0.815);
    text-align: center;
    padding: 1em;
    width: 900px;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 30px;
      width: 90%;
    }
    @media (max-width: ${theme.breakpoints.s}) {
      font-size: 25px;
      margin-top: 1em;
    }
  }

  .focus-list {
    width: 700px;
    font-size: 1.5em;
    background-color: white;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: ${theme.breakpoints.m}) {
      /* font-size: 30px; */
      width: 90%;
    }
  }

  .graduation {
    @media (min-width: ${theme.breakpoints.s}) {
      background-image: url(${Graduation});
    }
    background-position: center;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-attachment: fixed;
  }

  .focus-list-right {
    span:nth-of-type(1) {
      font-size: 1.5em;
      font-weight: bold;
    }
    span:nth-of-type(2) {
      font-size: 1.5em;
      text-align: center;
    }
    ul {
      margin-top: 2em;
    }
    li {
      font-size: 1em;
      padding-bottom: 0.5em;
    }
  }
`;
