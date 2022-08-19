import { useEffect, useState } from 'react';
import { FaArrowUp, FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components'

export const ScrollToTop = () => {
  const [scrollHeight, setScrollHeight] = useState()

  const handleScroll = () => {
    setScrollHeight(window.scrollY)
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <StyledScrollToTop title="Scroll to top" onClick={scrollToTop} scrollHeight={scrollHeight}>
      <FaArrowUp />
    </StyledScrollToTop>
  );
};

const StyledScrollToTop = styled.button`
  align-items: center;
  background-color: #333;
  border-radius: 50%;
  border: none;
  bottom: 0;
  color: white;
  cursor: pointer;
  display: flex;
  height: 3rem;
  justify-content: center;
  margin: 1rem;
  opacity: ${(props) => props.scrollHeight > 360 ? 1 : 0};
  padding: 1rem;
  position: fixed;
  right: 0;
  transition: opacity ease-in-out 150ms;
  width: 3rem;
  z-index: 10000;
`;