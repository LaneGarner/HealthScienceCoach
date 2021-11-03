import styled from "styled-components";

export const Footer = () => {
  return (
    <StyledFooter>
      <a href="https://lanegarner.dev" target="_blank" rel="noreferrer">
        {"<website by BLG />"}
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222;
  a {
    color: white;
    text-decoration: none;
    padding: 1em 0;
    /* padding-top: 1em; */
  }
`;
