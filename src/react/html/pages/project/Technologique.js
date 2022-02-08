import React from "react";

import { NavLink } from "react-router-dom";

const Technologique = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i className="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 1:</h3>
                    <h4>Veille technologique</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./../../img//twitter.png" alt="Projet 1"/>
                <p>
                Dans ce projet, nous devions préparer les bases de notre formation. <br/>
                Nous nous sommes renseigné sur le métier, regarder des témoignages, et vu le quotidien d'un développeur web. <br/><br/>
                De plus, le projet consistait surtout à mettre en place un moyen de se renseigner sur les nouveautés lié aux langages de code ou encore
                sur les technologiques lié à l'ordinateur. Cela nous permet de rester à jour des nouveautés et de ne cesser d'apprendre. <br/><br/>
                Pour cela, j'ai utilisé twitter comme base pour suivre des groupes correspondants à mes recherches ou encore des personnalités influentes
                qui relais des informations.
                Pour finir, nous avons aussi utilisé d'autre site annexe pour completer cette veille technologique: Medium, Presse citron, Reddit, HackersNew,
                le journal du geek ou encore Product Hunt !
                </p>
            </div>
        </div>
    )

}

export default Technologique;