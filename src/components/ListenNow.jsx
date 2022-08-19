import { useEffect, useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import Moment from "react-moment";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { parseString } from "xml2js";
import { FaSpotify } from "react-icons/fa";
import { SiGooglepodcasts, SiAnchor, SiPocketcasts, SiApplepodcasts } from "react-icons/si";

import { StoreContext } from "../Context";

import styled from "styled-components";
import { useIsMobile } from "./useIsMobile";

export const ListenNow = () => {
  const { isLoaded, setIsLoaded, podcasts, setPodcasts, currentPodcast, setCurrentPodcast, autoPlay, setAutoPlay } = useContext(StoreContext);

  const iconSize = 60;

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

  const isMobile = useIsMobile();

  return (
    <StyledListenNow isMobile={isMobile}>
      <h2>Podcast</h2>
      <p style={{ fontSize: "1.2em" }}>The Health Science Coach Podcast is available on these popular podcast apps:</p>
      <section className="podcast-hosts">
        {PODCAST_HOSTING.map((pod, i) => (
          <article tooltip={pod.name} className="podcast-host" key={i}>
            <a href={pod.url} target="blank" noreferrer="true">
              {pod.icon}
            </a>
          </article>
        ))}
      </section>
      <div className="podcast-player">
          <h2>Listen Now</h2>
          {currentPodcast !== "" && isLoaded && (
          <div className="now-playing">
            <div className="now-playing-content">
              {/* <img
                    src={currentPodcast["itunes:image"][0].$.href}
                    alt="health science coach logo"
                    className="podcast-logo"
                  /> */}
              <div style={{ padding: "1em" }}>
              </div>
              <div>
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
    </StyledListenNow>
  );
};

const StyledListenNow = styled.section`
  background-color: #fafafa;
  padding-top: ${(props)=>props.isMobile ? '20rem' : '3em'};
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 5em;
    margin-bottom: 10px;
    margin-top: 0;
  }
  p {
    margin-bottom: 70px;
    margin-top: 0;
    margin-inline: 1rem;
    text-align: center;
  }

.podcast-player {
  max-width: 800px;
  background-color: #f0f3f4;
  min-width: 20em;
  margin: auto;
  border-radius: 0.5em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  ul {
    margin: auto;
  }
  li {
    border-bottom: 1px solid #333;
    margin-bottom: 1em;
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
  }
  h3 {
    margin-top: 0.5em;
  }
  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 1.5rem;
  }
}

.player {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f3f4;
  padding: 1em;
}

.episode-listing {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
}

.now-playing {
  color: white;
  max-width: 100vw;
  
  .now-playing-content {
    padding: 1em;
    display: flex;
    background: #43cea2; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #185a9d, #43cea2); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, royalblue, #43cea2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-top-left-radius: 0.4em;
    border-top-right-radius: 0.4em;
    margin: 1rem;
    display: flex;
    flex-wrap: wrap;

  }
  .now-playing-text {
    background: rgba(0, 0, 0, 0.267);
    width: 23rem;
    padding: 2rem;
    margin-inline-start: 2rem;
    margin-block-start: 1rem;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    width: 80%;
    padding: 1rem;
  }
}

.episodes-list {
  height: 30em;
  overflow-y: scroll;
}

.play-button {
  cursor: pointer;
  margin: 2em;
  color: dodgerblue;
  font-size: 1.5em;
}

.podcast-date {
  color: #6a6a6a;
  font-style: italic;
}

.podcast-logo {
  width: 9em;
  height: 9em;
  margin-right: 2em;
}

.podcast-hosts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100vw;
  padding-bottom: 5em;
}

.podcast-host {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.podcast-host[tooltip] {
  position: relative;
}

.podcast-host[tooltip]::before {
  content: attr(tooltip);
  position: absolute;
  bottom: 0;
  background: #555;
  color: white;
  font-size: 1em;
  white-space: nowrap;
  z-index: 100;
  padding: 0.3em;
  border-radius: 0.5em;
  transform: scale(0);
  transition: transform ease-out 150ms, bottom ease-out 150ms;
}
.podcast-host[tooltip]:hover::before {
  transform: scale(1) translateY(35px);
}

`;
