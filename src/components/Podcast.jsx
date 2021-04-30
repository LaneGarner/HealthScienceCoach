import { useContext } from "react";
import { Link } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";

import { StoreContext } from "../Context";

export const Podcast = (props) => {
    const { podcasts, isLoaded } = useContext(StoreContext);
    // podcasts.forEach((pod) => console.log(pod));
    const currentPod = podcasts.find(
        (pod) => pod.guid[0]["_"] === props.match.params.episode
    );

    return (
        <div className="page-container">
            {isLoaded && (
                <div>
                    {console.log(currentPod)}
                    <Link to="/episodes">Back to episodes</Link>
                    <h1>{currentPod.title}</h1>
                    <ReactAudioPlayer
                        src={currentPod.enclosure[0].$.url}
                        controls
                        style={{ width: "89%", color: "white" }}
                        // autoPlay={autoPlay}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: currentPod.description[0],
                        }}
                    ></div>
                    {/* <p>{currentPod.description[0]}</p> */}
                </div>
            )}
        </div>
    );
};
