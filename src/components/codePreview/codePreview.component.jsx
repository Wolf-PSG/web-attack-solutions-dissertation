import React from 'react';
import { Link } from 'react-router-dom';
// import './codePreview.style.scss';
const CodePreview = () => {
    return (
        <div className="codePreview-container">
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

export default CodePreview;
