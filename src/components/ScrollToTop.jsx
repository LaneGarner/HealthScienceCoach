import { useEffect, useState, useRef} from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styled from 'styled-components'
import { useScrollToTop } from './useScrollToTop';

export const ScrollToTop = () => {
  // const scrollHeight = useRef(null)
  const [scrollHeight, setScrollHeight] = useState()

  const handleScroll = () => {
    // scrollHeight.current = window.scrollY;
    setScrollHeight(window.scrollY)
  }

  useEffect(()=> {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(()=>console.log({scrollHeight}, typeof scrollHeight), [scrollHeight])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
    <StyledScrollToTop title="Scroll to top" onClick={scrollToTop} scrollHeight={scrollHeight}>
      <FaChevronUp />
    </StyledScrollToTop>
  );
};

const StyledScrollToTop = styled.button`
  padding: 1rem;
  cursor: pointer;
  background-color: #333;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  opacity: ${(props) => props.scrollHeight > 360 ? 1 : 0};
  transition: opacity ease-in-out 220ms;
  right: 0;
  margin: 2rem;
  color: white;
  border: none;
  width: 3rem;
  height: 3rem;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;