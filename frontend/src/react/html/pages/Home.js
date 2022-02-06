import React from "react";

import { NavLink } from "react-router-dom";

const Home = () => {

    return(

        <div className="home">
            <NavLink exact to="/a-propos">
                <div className="menu-card">
                    <h4>Autobio</h4>
                </div>
            </NavLink>
            <NavLink exact to="/mes-formations">
            <div className="menu-card">
                <h4>Formations</h4>
            </div>
            </NavLink>
            <NavLink exact to="/veille">
                <div className="menu-card">
                    <h4>Veille technologique</h4>
                </div>
            </NavLink>
            <NavLink exact to="/contact">
                <div className="menu-card">
                    <h4>Contact</h4>
                </div>
            </NavLink>
            <NavLink exact to="/reservia">
                <div className="menu-card">
                    <h4>Réservia</h4>
                </div>
            </NavLink>
            <NavLink exact to="/ohmyfood">
                <div className="menu-card">
                    <h4>Ohmyfood</h4>
                </div>
            </NavLink>
            <NavLink exact to="/la-chouette-agence">
                <div className="menu-card">
                    <h4>La Chouette Agence</h4>
                </div>
            </NavLink>
            <NavLink exact to="/orinoco">
                <div className="menu-card">
                    <h4>Orinoco</h4>
                </div>
            </NavLink>
            <NavLink exact to="/piquante">
                <div className="menu-card">
                    <h4>Piquante</h4>
                </div>
            </NavLink>
            <NavLink exact to="/groupomania">
                <div className="menu-card">
                    <h4>Groupomania</h4>
                </div>
            </NavLink>
        </div>
    )

}

export default Home;