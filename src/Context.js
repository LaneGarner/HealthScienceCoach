import { useState, createContext } from "react";

export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [currentPodcast, setCurrentPodcast] = useState("");
  const [autoPlay, setAutoPlay] = useState(false);

  const store = {
    isLoaded,
    setIsLoaded,
    podcasts,
    setPodcasts,
    currentPodcast,
    setCurrentPodcast,
    autoPlay,
    setAutoPlay,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
