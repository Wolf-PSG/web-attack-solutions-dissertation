import React, { useEffect, useState } from 'react';
// import './codePreview.style.scss';
const Layout = ({ subtitle, desc, desc_2, desc_3, list, list_el }) => {
    const [paragraphs, setParagraphs] = useState('');
    useEffect(() => {
        if (list_el) {
            console.log(list_el);
            setParagraphs(list_el.map((ele) => ele));
        }
    }, [list_el]);

    return (
        <div className="layout-container">
            <h3> {subtitle} </h3>
            <p className="desc"> {desc} </p>
            <p className="desc_2"> {desc_2} </p>
            <p className="desc_3"> {desc_3} </p>
            <h2>{list}</h2>
            {!paragraphs ? (
                <div />
            ) : (
                paragraphs.map((element, index) => (
                    <div key={index}>
                        <h3>
                            {element[0]}
                            <br />
                        </h3>
                        <p>{element[1]}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Layout;
