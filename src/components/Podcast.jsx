import { useContext } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { StoreContext } from "../Context";
import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export const Podcast = (props) => {
  const { podcasts, isLoaded } = useContext(StoreContext);
  podcasts.forEach((pod) => console.log(pod));
  const currentPod = podcasts.find((pod) => pod.guid[0]["_"] === props.match.params.episode);

  return (
    <PodcastContainer>
      {isLoaded && (
        <div>
          <Link to="/episodes" className="back">
            <FaArrowAltCircleLeft className="back-icon" /> Back to episodes
          </Link>
          <h1>{currentPod.title}</h1>
          <div className="audio-player-container">
            <ReactAudioPlayer
              src={currentPod.enclosure[0].$.url}
              controls
              style={{ width: "80%", color: "white" }}
              // autoPlay={autoPlay}
            />
          </div>
          <div
            className="p-container"
            dangerouslySetInnerHTML={{
              __html: currentPod.description[0],
            }}
          ></div>
          {/* <p>{currentPod.description[0]}</p> */}
        </div>
      )}
    </PodcastContainer>
  );
};

const PodcastContainer = styled.div`
  margin: 2em;
  a {
    color: black;
  }
  .back {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }
  .back-icon {
    margin-right: 0.25em;
  }
  h1 {
    text-align: center;
    margin: 1em;
  }
  .audio-player-container {
    display: flex;
    justify-content: center;
    margin: 3em 0;
  }
  .p-container {
    margin-left: 10%;
    margin-right: 10%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
  }
  p {
    margin: 1em;
    max-width: 1000px;
  }
`;
