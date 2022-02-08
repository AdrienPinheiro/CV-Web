import React from "react";

import { NavLink } from "react-router-dom";

const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <nav>
                    <ul>
                        <li><a href="https://github.com/AdrienPinheiro" target="_blank"><i class="fab fa-github"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/adrien-pinheiro/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="../document/AdrienPINHEIRO-CV.pdf" download><i class="fas fa-address-card"></i></a></li>
                        <NavLink exact to="/contact"><li><i class="fas fa-envelope"></i></li></NavLink>
                    </ul>
                </nav>
                
            </div>
            <p>Adrien Pinheiro - Tous droits réservés - 2022</p>
        </footer>
    )
}

export default Footer;