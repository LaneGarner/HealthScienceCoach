import React from "react";
import styled from "styled-components";
import { Logo } from "../img/Logo";

export const LogoHero = () => {
  return (
    <Container>
      <StyledLogoContainer>
        <Logo color="#333" width="120px" />
      </StyledLogoContainer>
      <StyledSvgContainer>
        <svg
          className="curve"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
        </svg>
      </StyledSvgContainer>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-color: white;
  .curve {
    fill: white;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;

const StyledSvgContainer = styled.div`
  transform: rotate(180deg);
`;

const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    transform: translateY(2rem);
    z-index: 1;
    color: #333;
  }
`;
