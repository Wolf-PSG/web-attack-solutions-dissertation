import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUserShield,
    faBookDead,
    faChessRook,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import './header.style.scss';
const Explanation = () => {
    //  useEffect(() => {
    //      async function getQuiz() {
    //          const { pathname } = window.location;
    //          const searchID = pathname.split('/updateQuiz/');
    //          const Quiz = await axios.get(
    //              `https://quiz-maker-psg-api.herokuapp.com/api/v1/quiz/${searchID[1]}`
    //          );
    //          if (!Quiz) {
    //              return () => toast.dark('finding your quiz');
    //          }
    //          const { title, id } = Quiz.data.data.doc;
    //          setQuiz({ title, id });
    //      }
    //      getQuiz();
    //      // eslint-disable-next-line react-hooks/exhaustive-deps
    //  }, []);
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
                <Link className="option" to="/playground">
                    <FontAwesomeIcon icon={faChessRook} size="3x" />
                </Link>
                <Link className="option" to="/quiz">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x" />
                </Link>
            </div>
        </div>
    );
};

export default Explanation;
