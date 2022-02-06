import React from "react";

import { NavLink } from "react-router-dom";

const Formation = () => {

    return(
        <div className="formation">
            <NavLink exact to="/experiences">
                <div className="first-part-formation">
                    <p>Expériences</p>
                </div>
            </NavLink>
            <NavLink exact to="/scolaires">
            <div className="second-part-formation">
                <p>Scolaires</p>
            </div>
            </NavLink>
        </div>
    )

}

export default Formation;