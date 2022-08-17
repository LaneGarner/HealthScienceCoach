import { Logo } from "../img/Logo";

import "./About.scss";

export const About = () => {
  return (
    <div className="page-container about-page">
      <img 
        src="https://healthsciencecoach.com/img/health-career-podcast.png" 
        alt="Drew Garner hosting health science coach podcast with yellow geometric design in background" 
        style={{maxWidth: '750px', width: "80%"}}
      />
      <p className="hey-coach">"Hey Coach Garner, how do I become a nurse practitioner?"</p>
      <p className="about-description">
        I was asked this question in 2017 by a high school senior five weeks before graduation. This led to developing the Career and Technical Education Health Science Pathway at
        Turner High School and a partnership with Kansas City Kansas Community College certifying students as Nursing Assistants and Medical Aids when graduating from high school.
      </p>
      {/* <div style={{height: "700px", width: '100vw'}}><iframe src="https://outlook.office365.com/owa/calendar/HealthScienceCoachPodcast@turnerusd202.org/bookings/" width="100%" height="100%" scrolling="yes" style={{border:0}}></iframe></div> */}
    </div>
  );
};
