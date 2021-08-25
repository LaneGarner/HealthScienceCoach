import { useEffect, useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import Moment from "react-moment";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { parseString } from "xml2js";
import { FaYoutube, FaSpotify } from "react-icons/fa";
import { SiGooglepodcasts, SiAnchor, SiBreaker, SiPocketcasts, SiApplepodcasts } from "react-icons/si";

import { Logo } from "../img/Logo";
import { StoreContext } from "../Context";

import "./ListenNow.scss";

export const ListenNow = () => {
  const { isLoaded, setIsLoaded, podcasts, setPodcasts, currentPodcast, setCurrentPodcast, autoPlay, setAutoPlay } = useContext(StoreContext);

  const iconSize = 90;

  const PODCAST_HOSTING = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/show/5Lc14eULF9zUDzBGiVJJRQ",
      icon: <FaSpotify size={iconSize} style={{ color: "#1DB954" }} />,
    },
    {
      name: "Apple Podcasts",
      url: "https://podcasts.apple.com/us/podcast/health-science-coach/id1559565989",
      color: "red",
      icon: <SiApplepodcasts size={iconSize} style={{ color: "#7D50DF" }} />,
    },
    {
      name: "Google Podcasts",
      url: "https://podcasts.google.com/feed/aHR0cHM6Ly93d3cuc3ByZWFrZXIuY29tL3Nob3cvNDg1MDkwNy9lcGlzb2Rlcy9mZWVk",
      icon: <SiGooglepodcasts size={iconSize} style={{ color: "red" }} />,
    },
    {
      name: "Pocket Casts",
      url: "https://pca.st/6myv5x21",
      icon: <SiPocketcasts size={iconSize} style={{ color: "red" }} />,
    },
    {
      name: "Anchor.fm",
      url: "https://anchor.fm/healthsciencecoach",
      icon: <SiAnchor size={iconSize} style={{ color: "red" }} />,
    },
    // {
    //   name: "Breaker",
    //   url: "https://www.breaker.audio/health-science-coach",
    //   color: "green",
    //   icon: <SiBreaker size={iconSize} style={{ color: "green" }} />,
    // },
  ];

  useEffect(() => {
    axios
      .get(`https://anchor.fm/s/522c0fa4/podcast/rss`)
      .then((res) => {
        const xml = res.data;
        parseString(xml, (err, result) => {
          setPodcasts(result.rss.channel[0].item);
          setCurrentPodcast(result.rss.channel[0].item[0]);
        });
      })
      .then(setIsLoaded(true));
  }, []);

  const handlePlayNewPodcast = (podcast) => {
    setCurrentPodcast("");
    setCurrentPodcast(podcast);
    setAutoPlay(true);
  };

  return (
    <section className="podcast-player-container">
      <h2>Podcast</h2>
      <p style={{ fontSize: "1.2em" }}>The Health Science Coach Podcast is available on these popular podcast apps</p>
      <section className="podcast-hosts">
        {PODCAST_HOSTING.map((pod, i) => (
          <article tooltip={pod.name} className="podcast-host" key={i}>
            {/* <div style={{ width: "50px", height: "50px", background: "black" }} /> */}
            <a href={pod.url} target="blank" noreferrer="true">
              {pod.icon}
              {/* {pod.name} */}
            </a>
          </article>
        ))}
      </section>
      <div className="podcast-player">
        {currentPodcast !== "" && isLoaded && (
          <div className="now-playing">
            <div className="now-playing-content">
              {/* <img
                    src={currentPodcast["itunes:image"][0].$.href}
                    alt="health science coach logo"
                    className="podcast-logo"
                  /> */}
              <div style={{ padding: "1em" }}>
                <Logo color="black" width="200px" />
              </div>
              <div>
                <h2>Listen Now</h2>
                <div className="now-playing-text">
                  <strong>Now playing:</strong> {currentPodcast.title[0]} <Moment format="dddd, MMMM Do YYYY">{currentPodcast.pubDate[0]}</Moment>{" "}
                </div>
              </div>
            </div>
            <div className="player">
              <ReactAudioPlayer src={currentPodcast.enclosure[0].$.url} controls style={{ width: "89%", color: "white" }} autoPlay={autoPlay} />
            </div>
          </div>
        )}
        <ul className="episodes-list" style={{ listStyle: "none" }}>
          <h4>All Episodes</h4>
          {isLoaded ? (
            podcasts.map((podcast, index) => (
              <li key={index}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaPlay className="play-button" onClick={() => handlePlayNewPodcast(podcast)} />
                  <div className="episode-listing">
                    <Moment className="podcast-date" format="dddd, MMMM Do YYYY">
                      {podcast.pubDate[0]}
                    </Moment>
                    <h3>{podcast.title[0]}</h3>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>not loaded</li>
          )}
        </ul>
      </div>
    </section>
  );
};
