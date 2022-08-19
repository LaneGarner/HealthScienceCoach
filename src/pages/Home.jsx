import styled from "styled-components";
import { Footer } from "../components/Footer";
import { GetInTouch } from "../components/GetInTouch";
import { Hero } from "../components/Hero";
import { ListenNow } from "../components/ListenNow";
import YouTube from "../components/YouTube";
import {LogoHero} from "../components/LogoHero";

import "./Home.scss";

export const Home = () => {
  return (
    <HomeContainer>
      <LogoHero className="section" />
      <Hero className="section" />
      <ListenNow className="section" />
      <YouTube className="section" />
      <GetInTouch className="section" />
      <Footer className="section" />
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  scroll-snap-type: y mandatory;
  .section {
    scroll-snap-align: start;
  }
`;
