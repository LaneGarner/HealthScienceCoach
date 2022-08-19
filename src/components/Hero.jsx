import styled from "styled-components";

import { Fancy } from "./Fancy";
import Graduation from "../img/graduation.jpg";
import GraduationSmaller from "../img/graduation-smaller.jpg";
import { theme, SmallScreen } from "../theme";
import { FaCheckCircle } from "react-icons/fa";
import { Image } from "./Image";
import { useIsMobile } from "../hooks/useIsMobile";

const SkillItem = ({title}) => {
  return (
      <StyledItem>
        <div className="check">
          <FaCheckCircle color="#333" />
        </div>
        {title}
      </StyledItem>
  )
}

const StyledItem = styled.li`
  color: #222;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  .check {
      display: grid;
      align-items: center;
      width: 30px;
      height: 30px;
      margin-inline-end: 0.25rem;
    }
`;

const SKILLS = [
  "Careers in healthcare and sports medicine",
  "Student experiences in highschool and college",
  "University and college programs and degrees",
  "Non-traditional pathways",
  "Continuing education units",
  "Health career events, and more",
]

export const Hero = () => {
  const isMobile = useIsMobile();
  return (
    <HeroContainer isMobile={isMobile} theme={theme}>
      <div className="graduation">
        <p className="tagline">Helping students and parents learn about pathways into healthcare and sports medicine careers</p>
        <SmallScreen>
          <Image style={{ width: "90%", height: '100%', borderRadius: '1rem', aspectRatio: 'auto 760 / 507', }} src={GraduationSmaller} alt="Graduation" />
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
  align-items: center;
  display: flex;
  flex-direction: column;

  .tagline {
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.7);
    border-radius: 1rem;
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 3rem;
    margin-top: 1.5rem;
    padding: 1rem 2rem;
    text-align: center;
    transform: ${(props) => props.isMobile ? 'translateY(0px)' : 'translateY(70px)'};
    width: 900px;
    @media (max-width: ${theme.breakpoints.m}) {
      font-size: 30px;
      width: 90%;
    }
    @media (max-width: ${theme.breakpoints.s}) {
      font-size: 25px;
      margin-top: 1rem;
    }
  }

  .focus-list {
    align-items: center;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    padding: 0.5rem;
    width: 41rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    h3 {
      margin-top: 0.7rem;
    }
    span:nth-of-type(1) {
      font-size: 1.5rem;
      font-weight: bold;
    }
    span:nth-of-type(2) {
      font-size: 1.5rem;
      text-align: center;
    }
    ul {
      list-style: none;
      margin-top: 1rem;
      padding-left: 0;
    }
    li {
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
      background-position: center;
      width: 100vw;
      height: 100vh;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    background-attachment: fixed;
  }
`;
