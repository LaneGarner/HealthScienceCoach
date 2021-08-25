import { Link } from "react-router-dom";
import styled from "styled-components";
import { Fancy } from "./Fancy";

import { Logo } from "../img/Logo";

import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-section">
      {/* <img src={graduation} alt="Graduation" />; */}
      <div className="graduation">
        {/* <Fancy> */}
        <p className="tagline">Helping students and parents learn about pathways into health care and sports medicine careers</p>
        {/* <p className="tagline">A podcast for students and parents to learn about pathways into health care and sports medicine careers</p> */}
        {/* </Fancy> */}
        <Fancy>
          {/* <p className="about-description">
            In 2017 I was asked this question by a high school senior five weeks before graduation. This led to developing the Career and Technical Education Health Science Pathway
            at Turner High School and a partnership with Kansas City Kansas Community College certifying students as Nursing Assistants and Medical Aids when graduating from high
            school.
          </p> */}
          <div className="focus-list">
            {/* <Logo width="200px" /> */}
            <div className="focus-list-right">
              <ul>
                <li>Careers in Health Care and Sports Medicine</li>
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
    </div>
  );
};

// const Hero = styled.div`
//   background-image: url(../img/graduation.jpg);
// `;
