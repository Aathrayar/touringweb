import React from "react";
import video from '../assets/Video/y2mate.com - Photography Ad Video Template Editable_1080p.mp4'
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