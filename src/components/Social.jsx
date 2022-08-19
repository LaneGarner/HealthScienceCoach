import { FaTwitter, FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from "react-icons/fa";

export const Social = ({isMobile}) => {
  return (
    <div className="social-links">
      <a href="https://www.youtube.com/channel/UCyYO0_xENmD9bZRSPo9Lveg" target="_blank" rel="noreferrer">
        <FaYoutube />
      </a>
      <a href="https://twitter.com/healthsciencec" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.facebook.com/HealthScienceCoach" target="_blank" rel="noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/healthsciencecoach/" target="_blank" rel="noreferrer">
        <FaInstagramSquare />
      </a>
      <a href="https://www.linkedin.com/in/drew-garner-9852614/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
    </div>
  );
};
