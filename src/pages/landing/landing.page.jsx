import React from 'react';
import { Link } from 'react-router-dom';
import './landing.style.scss';
const Landing = () => {
    return (
        <div className="Landing-container">
            {/* <div>
                <video id="background-video" loop autoplay>
                    <source src="./video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
            {/* <source
                    src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"
                    type="video/ogg"
                /> */}
            <h1> Protect Your Application </h1>
            <button className="goto_learning">
                <Link to="/learning" className="link_learning">
                    Learn More
                </Link>
            </button>
            {/* <h3> click the </h3> */}
        </div>
    );
};

export default Landing;
