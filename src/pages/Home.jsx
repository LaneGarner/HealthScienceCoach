import { Footer } from "../components/Footer";
import { GetInTouch } from "../components/GetInTouch";
import { Hero } from "../components/Hero";
import { ListenNow } from "../components/ListenNow";
import YouTube from "../components/YouTube";

import "./Home.scss";

export const Home = () => {
  return (
    <div>
      <Hero />
      <ListenNow />
      <YouTube />
      <GetInTouch />
      <Footer />
    </div>
  );
};
