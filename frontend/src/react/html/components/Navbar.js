import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <header>
            <div className="header">
                <div className="first-part-header">
                    <NavLink exact to="/accueil">
                        <h1>Adrien Pinheiro</h1>
                    </NavLink>
                </div>

                <nav className="second-part-header">
                    <ul>
                        <li>
                            <NavLink exact to="/a-propos">
                                <h3>À propos</h3>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/mes-formations">
                                <h3>Mes formations</h3>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/contact">
                                <h3>Contact</h3>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;