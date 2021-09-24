import { useContext, useEffect } from "react";
import { StoreContext } from "../Context";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import axios from "axios";
import { parseString } from "xml2js";

import styled from "styled-components";

export const Episodes = () => {
  const { podcasts, setPodcasts } = useContext(StoreContext);

  useEffect(() => {
    if (podcasts.length < 1) {
      axios.get(`https://anchor.fm/s/522c0fa4/podcast/rss`).then((res) => {
        const xml = res.data;
        parseString(xml, (err, result) => {
          setPodcasts(result.rss.channel[0].item);
        });
      });
    }
  }, []);
  return (
    <EpisodesContainer>
      <h1>Podcast Episodes</h1>
      {podcasts.length ? (
        podcasts.map((pod) => (
          <div className="episode-card" key={pod.guid[0]["_"]}>
            <img src={pod["itunes:image"][0].$.href} alt="health science coach logo" className="podcast-logo" />
            <div className="right-content">
              <Moment date={pod.pubDate[0]} className="podcast-date date" format="dddd, MMMM Do YYYY" />
              <Link to={`/podcast/${pod.guid[0]["_"]}`}>
                <h2>{pod.title}</h2>
              </Link>
              {console.log(pod["itunes:episode"])}
            </div>
          </div>
        ))
      ) : (
        <div>loading...</div>
      )}
    </EpisodesContainer>
  );
};

const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
  a {
    text-decoration: none;
    color: black;
  }
  .right-content {
    margin-top: 1em;
    margin-left: 0.5em;
  }
  h1 {
    margin-bottom: 2em;
  }
  .episode-card {
    width: 800px;
    display: flex;
    margin-bottom: 2.5em;
    padding-bottom: 2.5em;
    border-bottom: solid #333 1px;
    img {
      border-radius: 0.5em;
    }
    &:nth-last-of-type(1) {
      border-bottom: none;
    }
  }
`;
