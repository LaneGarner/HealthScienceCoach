import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const GetInTouch = () => {
  return (
    <Container>
      <h2>Get In Touch</h2>
      <div className="contact">
        <p>
          If you're interested in sharing your <strong>“WHY”</strong>, please <Link to="/contact">contact me</Link>.
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  h2 {
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 5em;
  }
  p {
  }
`;
