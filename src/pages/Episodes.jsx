import { useContext, useEffect } from "react";
import { StoreContext } from "../Context";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import axios from "axios";
import { parseString } from "xml2js";

import "./Episodes.scss";

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
    <div className="page-container episodes-container">
      <h1>Podcast Episodes</h1>
      {podcasts.length ? (
        podcasts.map((pod) => (
          <div className="episode-card" key={pod.guid[0]["_"]}>
            <img src={pod["itunes:image"][0].$.href} alt="health science coach logo" className="podcast-logo" />
            <div>
              <Moment date={pod.pubDate[0]} className="podcast-date" format="dddd, MMMM Do YYYY" />
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
    </div>
  );
};
