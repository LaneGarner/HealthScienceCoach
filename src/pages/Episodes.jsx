import { useContext } from "react";
import { StoreContext } from "../Context";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import "./Episodes.scss";

export const Episodes = () => {
  const { podcasts } = useContext(StoreContext);
  return (
    <div className="page-container episodes-container">
      <h1>Podcast Episodes</h1>
      {podcasts ? (
        podcasts.map((pod) => (
          <div className="episode-card" key={pod.guid[0]["_"]}>
            <img src={pod["itunes:image"][0].$.href} alt="health science coach logo" className="podcast-logo" />
            <div>
              <Moment className="podcast-date" format="dddd, MMMM Do YYYY">
                <p>{pod.pubDate}</p>
              </Moment>
              <Link to={`/podcast/${pod.guid[0]["_"]}`}>
                <h2>{pod.title}</h2>
              </Link>
              {console.log(pod["itunes:episode"])}
            </div>
          </div>
        ))
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};
