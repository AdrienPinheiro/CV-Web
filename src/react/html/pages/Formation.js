import React from "react";

import { NavLink } from "react-router-dom";

const Formation = () => {

    return(
        <div className="formation">
            <NavLink exact to="/experiences">
                <div className="card-formation-experience">
                        <div className="top-card-formation-experience">
                            <h2>Expériences</h2>
                        </div>
                        <div className="bottom-card-formation-experience">
                            <ul>
                                <li>- Interim dans le bâtiment - 2017</li>
                                <li>- Caissier - 2017</li>
                                <li>- Service civique - 2018</li>
                                <li>- Animateur - 2018 / 2020</li>
                            </ul>
                            <i className="fas fa-arrow-circle-right"/>
                        </div>
                </div>
            </NavLink>
            <NavLink exact to="/scolaires">
                <div className="card-formation-school">
                    <div className="top-card-formation-school">
                        <h2>Scolaire</h2>
                    </div>
                    <div className="bottom-card-formation-school">
                            <ul>
                                <li>- Baccalauréat littéraire - 2017</li>
                                <li>- Développeur web et web mobile - 2020</li>
                            </ul>
                            <i className="fas fa-arrow-circle-right"/>
                        </div>
                </div>
            </NavLink>
        </div>
    )

}

export default Formation;