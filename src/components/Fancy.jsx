import styled from "styled-components";

export const Fancy = ({ children }) => {
  return <FancyContainer>{children}</FancyContainer>;
};

const FancyContainer = styled.div`
  align-items: center;
  backdrop-filter: blur(5px);
  background: #ff0000cc;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  margin-bottom: 150px;
  margin-top: 150px;
  width: 100vw;
`;
