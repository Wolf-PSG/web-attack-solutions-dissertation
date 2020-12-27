import React, { useState } from 'react';
import { useAttackDispatch } from '../../context/attackStore';
import Zone from '../learningZone/zone.page';
import './learning.style.scss';
const Learning = () => {
    const dispatch = useAttackDispatch();
    const [attack, setAttack] = useState('');
    const handleClick = (e) => {
        const { id } = e.currentTarget;
        dispatch({ type: 'CHANGE_ATTACK', payload: id });
    };
    return (
        <div className="learning-container">
            <div className="sidenav">
                <li>
                    <button
                        className="learning-option"
                        id="xss"
                        onClick={handleClick}
                    >
                        XSS
                    </button>
                </li>
                <li>
                    <button
                        className="learning-option"
                        id="data sanitisation"
                        onClick={handleClick}
                    >
                        Data Sanitisation
                    </button>
                </li>
                <li>
                    <button
                        className="learning-option"
                        id="rate limiting"
                        onClick={handleClick}
                    >
                        Rate Limiting
                    </button>
                </li>
                <li>
                    <button
                        className="learning-option"
                        id="ddos"
                        onClick={handleClick}
                    >
                        DDOS
                    </button>
                </li>
                <li>
                    <button
                        className="learning-option"
                        id="sql injection"
                        onClick={handleClick}
                    >
                        SQL Injection
                    </button>
                </li>
            </div>
            <div className="zone-container">
                <Zone />
            </div>
        </div>
    );
};

export default Learning;
