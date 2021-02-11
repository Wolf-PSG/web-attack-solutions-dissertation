/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserShield,
    faBookDead,
    faChessRook,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import './header.style.scss';
const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="home">
                <FontAwesomeIcon
                    icon={faUserShield}
                    size="3x"
                    className="logo"
                />
                <div className="title"> Web Attack Solutions </div>
            </Link>
            <div className="nav">
                <Link className="option" to="/learning">
                    <FontAwesomeIcon icon={faBookDead} size="3x" />
                </Link>
                <a
                    className="option"
                    href="http://localhost:4000"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faChessRook} size="3x" />
                </a>
                <Link className="option" to="/quiz">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                </Link>
            </div>
        </div>
    );
};

export default Header;
