import React from "react";

import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <h3>Liens utiles:</h3>
                <nav>
                    <ul>
                        <li><a href="https://github.com/AdrienPinheiro" target="_blank">Github</a></li>
                        <li><a href="../document/CV_AdrienPINHEIRO.pdf" download>Mon CV</a></li>
                        <NavLink exact to="/contact"><li>Contact</li></NavLink>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;