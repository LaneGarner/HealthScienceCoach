import styled from "styled-components";

export const Fancy = ({ children }) => {
  return <FancyContainer>{children}</FancyContainer>;
};

const FancyContainer = styled.div`
  background: #ff0000cc;
  backdrop-filter: blur(5px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  justify-content: center;
  margin-top: 150px;
  margin-bottom: 150px;
`;
