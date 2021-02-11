/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './footer.style.scss';
function Footer() {
    return (
        <footer className="footer_component">
            <h4>© Parmjit Singh Gill 2021 </h4>

            <a href="https://parmjit.dev" target="_blank">
                <h4 className="my_site_footer"> My Website </h4>
            </a>
        </footer>
    );
}

export default Footer;
