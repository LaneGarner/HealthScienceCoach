import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { FaYoutube, FaVideo } from "react-icons/fa";
import styled from "styled-components";

import { theme } from "../theme";
import { useMediaQuery } from "react-responsive";

const YOUTUBE_PLAYLIST_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const PLAYLIST_ID = "PLH0ttkxfOyIcym5Ngnc0XsK8EqeAMJ49v";

const VIDEO_SECTION_MAX_WIDTH = 900;

const YouTube = () => {
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const res = await fetch(`${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
    const data = await res.json();
    setVideos(data.items);
  };

  useEffect(() => getVideos(), []);

  const isColumn = useMediaQuery({ query: `(max-width: ${VIDEO_SECTION_MAX_WIDTH}px)` })

  return (
    <YouTubeStyled style={{ backgroundColor: theme.colors.lightGrey, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p style={{ fontSize: "1.1rem", marginTop: "100px", marginBottom: '1rem', textAlign: 'center' }}>All podcast episodes are available on</p>
      <h2 style={{ fontSize: "3rem", marginBottom: "10px", marginBottom: "10px" }}>YouTube</h2>
      <div style={{display: 'flex', columnGap: '7rem', rowGap: '4rem', alignItems: 'start', justifyContent: 'center', padding: '2rem', flexWrap: 'wrap'}}>
        <CardStyled YouTube href="https://www.youtube.com/channel/UCyYO0_xENmD9bZRSPo9Lveg?sub_confirmation=1" target="_blank" noreferrer="true">
          <FaYoutube style={{ fontSize: "5rem" }} />
          <p>Subscribe</p>
        </CardStyled>
        <CardStyled AllEpisodes href="https://www.youtube.com/playlist?list=PLH0ttkxfOyIcym5Ngnc0XsK8EqeAMJ49v" target="_blank" noreferrer="true">
          <FaVideo style={{ fontSize: "5rem" }} />
          <p style={{ textAlign: "center", marginTop: "0.5em", fontSize: '1rem' }}>
            View all episodes
          </p>
        </CardStyled>
      </div>
      <p style={{ textAlign: 'center', fontWeight: "bold", fontSize: "1.75rem", marginBlock: "3rem" }}>Recent episodes</p>
      <div className="video-grid">
        {videos && videos.map((video, i) => <ReactPlayer width={isColumn ? '85%' : 400} height={isColumn ? '85%' : 226} key={i} url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} />)}
      </div>
      
    </YouTubeStyled>
  );
};

export default YouTube;

const YouTubeStyled = styled.div`
  padding-inline: 2rem;
  .video-grid {
    display: grid;
    justify-items: center;
    gap: 2rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: ${VIDEO_SECTION_MAX_WIDTH}px) {
      grid-template-columns: 1fr;
    }
  }
`

const CardStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 800;
  color: ${(props) => (props.YouTube ? theme.colors.red : props.AllEpisodes ? "dodgerblue" : "black")};
  .YouTubeSubscribe {
    color: red;
  }
  .AllEpisodes {
    color: red;
  }
  p {
    text-transform: uppercase;
  }
`;
