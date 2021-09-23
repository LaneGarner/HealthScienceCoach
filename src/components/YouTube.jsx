import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { FaYoutube, FaVideo } from "react-icons/fa";
import styled from "styled-components";

import { theme } from "../theme";

const YOUTUBE_PLAYLIST_API = "https://www.googleapis.com/youtube/v3/playlistItems";
const PLAYLIST_ID = "PLH0ttkxfOyIcym5Ngnc0XsK8EqeAMJ49v";

const YouTube = () => {
  const [videos, setVideos] = useState(null);

  const getVideos = async () => {
    const res = await fetch(`${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=10&&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
    const data = await res.json();
    setVideos(data.items);
  };

  useEffect(() => getVideos(), []);

  return (
    <div style={{ backgroundColor: theme.colors.lightGrey, display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ fontSize: "5em", marginTop: "100px", marginBottom: "10px" }}>YouTube</h2>
      <p style={{ fontSize: "1.2em", marginBottom: "10px" }}>All podcast episodes are also available on YouTube</p>

      {/* <CardContainerStyled> */}
      <CardStyled YouTube href="https://www.youtube.com/channel/UCyYO0_xENmD9bZRSPo9Lveg?sub_confirmation=1" target="_blank" noreferrer="true">
        <FaYoutube style={{ fontSize: "12rem" }} />
        <p>Subscribe</p>
      </CardStyled>

      {/* </CardContainerStyled> */}
      <p style={{ fontWeight: "bold", fontSize: "3em", marginTop: 0, marginBottom: "50px" }}>Recent episodes:</p>
      <div
        style={{ display: "grid", gridGap: "30px", gridTemplateColumns: "1fr 1fr" }} //style={{ overflowY: "scroll", height: "500px" }}
      >
        {videos && videos.map((video, i) => <ReactPlayer width={400} height={226} key={i} url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`} />)}
      </div>
      <CardStyled AllEpisodes href="https://www.youtube.com/channel/UCyYO0_xENmD9bZRSPo9Lveg" target="_blank" noreferrer="true">
        <FaVideo style={{ fontSize: "5rem" }} />
        <p>View all episodes</p>
      </CardStyled>
    </div>
  );
};

export default YouTube;

const CardStyled = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin: ${(props) => (props.YouTube ? "0.5em auto 2em" : props.AllEpisodes ? "2em auto 2em" : null)};
  font-size: 3em;
  font-weight: 800;
  color: ${(props) => (props.YouTube ? theme.colors.red : props.AllEpisodes ? "dodgerblue" : "black")};

  .YouTubeSubscribe {
    color: red;
  }
  .AllEpisodes {
    color: dodgerblue;
  }
  p {
    text-transform: uppercase;
  }
`;

const CardContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
