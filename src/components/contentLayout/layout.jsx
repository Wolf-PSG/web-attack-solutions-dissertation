import React from 'react';
// import './codePreview.style.scss';
const Layout = ({ subtitle, desc, desc_2, desc_3, list, list_el }) => {
    console.log(list_el);
    return (
        <div className="layout-container">
            <h3> {subtitle} </h3>
            <p className="desc"> {desc} </p>
            <p className="desc_2"> {desc_2} </p>
            <p className="desc_3"> {desc_3} </p>
            <h1>{list}</h1>
        </div>
    );
};

export default Layout;
