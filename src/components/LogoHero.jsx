import React from "react";
import styled from "styled-components";
import { useIsMobile } from "../hooks/useIsMobile";
import { Logo } from "../img/Logo";

export const LogoHero = () => {
  const isMobile = useIsMobile();
  return (
    <Container>
      <StyledLogoContainer isMobile={isMobile}>
        <Logo color="#333" width="120px" />
      </StyledLogoContainer>
      {!isMobile && <StyledSvgContainer>
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
      </StyledSvgContainer>}
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  position: relative;
  .curve {
    bottom: 0;
    fill: white;
    left: 0;
    position: absolute;
  }
`;

const StyledSvgContainer = styled.div`
  transform: rotate(180deg);
`;

const StyledLogoContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-block:  ${(props) => props.isMobile ? '1rem' : 0};
  svg {
    color: #333;
    transform:  ${(props) => props.isMobile ? 0 : 'translateY(2rem)'};
    z-index: 1;
  }
`;
