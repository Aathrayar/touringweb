import React from "react";
import video from '../assets/Video/Sri Lanka _ 4K Cinematic Travel Film.mp4'
import './BgVideo.css'

function BgVideo() {
    return (
        <div className="bgContainer">
            <div className="overlay">

                <video src={video} autoPlay loop muted/>

                <div className="container">
                  
                </div>
            </div>
        </div>
    );
}

export default BgVideo;
