import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import 'highlight.js/styles/vs2015.css';

// import './codePreview.style.scss';
const CodePreview = ({ props }) => {
    const [code, setCode] = useState('');
    useEffect(() => {
        const code_xss = "axios.get('http://localhost:3000/xss)";
        switch (props) {
            case 'xss':
                setCode(code_xss);
                break;
            default:
                setCode('');
        }
    }, [props]);
    return (
        <div className="codePreview-container">
            <SyntaxHighlighter language="javascript" style={a11yLight}>
                {code}
            </SyntaxHighlighter>
            <ToastContainer />
        </div>
    );
};

export default CodePreview;
