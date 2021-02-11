/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import './landing.style.scss';
const Landing = () => {
    return (
        <div className="landing-container">
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
            <div className="card-container">
                <h1> Protect Your Application </h1>
                <h1> Protect Your Users</h1>
                <div className="goto-container">
                    <button className="default_button goto_learning">
                        <Link to="/learning" className="link_learning">
                            Learn More
                        </Link>
                    </button>
                    <button className="default_button goto_playground">
                        <a href="http://localhost:4000" target="_blank">
                            Simulate Attack
                        </a>
                    </button>
                    <button className="default_button goto_quiz">
                        <Link to="/learning" className="link_learning">
                            Test Knowledge
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
