import React, { useState } from 'react';
import CodePreview from '../../components/codePreview/codePreview.component';
import './learning.style.scss';
const Learning = () => {
    const [attack, setAttack] = useState('');
    const handleClick = (e) => {
        const { id } = e.currentTarget;
        console.log(e);
        setAttack(id);
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
                        id="data_sanitisation"
                        onClick={handleClick}
                    >
                        Data Sanitisation
                    </button>
                </li>
                <li>
                    <button
                        className="learning-option"
                        id="rate_limiting"
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
            </div>
        </div>
    );
};

export default Learning;
