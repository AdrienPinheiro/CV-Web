import React from "react";

import { NavLink } from "react-router-dom";

const School = () => {

    return (
        <section>
            <NavLink exact to="/mes-formations"><i class="fas fa-arrow-left"></i></NavLink>
            <div className="school">
                <div className="card-formation">
                    <i class="fas fa-arrow-right"></i>
                    <p>Intérim dans le bâtiment - 2017</p>
                </div>
                <div className="card-formation">
                    <i class="fas fa-arrow-right"></i>
                    <p>Caissier - 2017</p>
                </div>
                <div className="card-formation">
                    <i class="fas fa-arrow-right"></i>
                    <p>Service civique - 2018</p>
                </div>
                <div className="card-formation">
                    <i class="fas fa-arrow-right"></i>
                    <p>Animateur - 2018 / 2020</p>
                </div>
            </div>
        </section>
    )
}

export default School;