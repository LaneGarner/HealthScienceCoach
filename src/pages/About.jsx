import { Link } from "react-router-dom";

import { Logo } from "../img/Logo";

import "./About.scss";

export const About = () => {
  return (
    <div className="page-container about-page">
      {/* <h1>About</h1> */}
      <Logo width="200px" />
      <p className="hey-coach">"Hey Coach Garner, how do I become a nurse practitioner?"</p>
      <p className="about-description">
        I was asked this question in 2017 by a high school senior five weeks before graduation. This led to developing the Career and Technical Education Health Science Pathway at
        Turner High School and a partnership with Kansas City Kansas Community College certifying students as Nursing Assistants and Medical Aids when graduating from high school.
      </p>
    </div>
  );
};
