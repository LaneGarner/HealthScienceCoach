import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ListenNow } from "./components/ListenNow";
import { RecentEpisodes } from "./components/RecentEpisodes";

export const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <ListenNow />
            <RecentEpisodes />
            <About />
            <Contact />
        </div>
    );
};
