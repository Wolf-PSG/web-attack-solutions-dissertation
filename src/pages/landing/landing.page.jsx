import React from 'react'
import { Link } from 'react-router-dom'
import './landing.style.scss'
const Landing = () => {
    return (
        <div className="Landing-container">
            <h1> Protect Your Application </h1>
            <button className="goto_learning">
                <Link to="/learning" className="link_learning">
                    Learn More
                </Link>
            </button>

            {/* <h3> click the </h3> */}
        </div>
    )
}

export default Landing
