import { useEffect, useContext } from "react";
import ReactAudioPlayer from "react-audio-player";
import Moment from "react-moment";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { parseString } from "xml2js";

import { Logo } from "../img/Logo";
import { StoreContext } from "../Context";

import "./ListenNow.scss";

export const ListenNow = () => {
    const {
        isLoaded,
        setIsLoaded,
        podcasts,
        setPodcasts,
        currentPodcast,
        setCurrentPodcast,
        autoPlay,
        setAutoPlay,
    } = useContext(StoreContext);

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
        <section>
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
                                <strong>Now playing:</strong>{" "}
                                {currentPodcast.title[0]}{" "}
                                <Moment format="dddd, MMMM Do YYYY">
                                    {currentPodcast.pubDate[0]}
                                </Moment>{" "}
                            </div>
                        </div>
                        <div className="player">
                            <ReactAudioPlayer
                                src={currentPodcast.enclosure[0].$.url}
                                controls
                                style={{ width: "89%", color: "white" }}
                                autoPlay={autoPlay}
                            />
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
                                    <FaPlay
                                        className="play-button"
                                        onClick={() =>
                                            handlePlayNewPodcast(podcast)
                                        }
                                    />
                                    <div className="episode-listing">
                                        <Moment
                                            className="podcast-date"
                                            format="dddd, MMMM Do YYYY"
                                        >
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
