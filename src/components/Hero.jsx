import styled from "styled-components";

import { Fancy } from "./Fancy";
import Graduation from "../img/graduation.jpg";
import { theme, SmallScreen } from "../theme";
import { FaCheckCircle } from "react-icons/fa";

const SkillItem = ({title}) => {
  return (
    <li>
      <StyledCheck>
        <FaCheckCircle color="#333" />
      </StyledCheck>
      {title}
    </li>
  )
}

const StyledCheck = styled.div`
  width: 30px;
  height: 30px;
`;

const SKILLS = [
  "Careers in Healthcare and Sports Medicine",
  "Student Experiences in High School and College",
  "University and College Programs and Degrees",
  "Non-Traditional Pathways",
  "Continuing Education Units",
  "Health Career Events, and more",
]

export const Hero = () => {
  return (
    <HeroContainer theme={theme}>
      <div className="graduation">
        <p className="tagline">A podcast to help students and parents learn about pathways into Healthcare and sports medicine careers</p>
        {/* TODO: SMALLER IMAGE */}
        <SmallScreen>
          <img style={{ width: "90%" }} src={Graduation} alt="Graduation" />;
        </SmallScreen>

        <Fancy>
          <div className="focus-list">
            <ul>
              {SKILLS.map((s, i)=> (
                <SkillItem key={i} title={s} />
              ))}
            </ul>
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
    margin-top: 1.5em;
    margin-bottom: 1em;
    font-size: 40px;
    font-weight: 800;
    font-family: "Inter", sans-serif;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);
    text-align: center;
    padding: 1em;
    width: 900px;
    border-radius: 2px;
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
    padding-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1em;
    h3 {
      margin-top: 0.7em;
    }
    span:nth-of-type(1) {
      font-size: 1.5em;
      font-weight: bold;
    }
    span:nth-of-type(2) {
      font-size: 1.5em;
      text-align: center;
    }
    ul {
      margin-top: 1em;
      list-style: none;
      padding-left: 0;
    }
    li {
      font-size: 0.9em;
      padding-bottom: 0.5em;
      display: flex;
      align-items: center;
    }
    svg {
      margin-right: 0.5em;
    }
    @media (max-width: ${theme.breakpoints.m}) {
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
`;
