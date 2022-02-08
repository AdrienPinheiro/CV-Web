import React from "react";

import { NavLink } from "react-router-dom";

const Groupomania = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i class="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 7:</h3>
                    <h4>Groupomania</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./img/project/groupomania.png"/>
                <p>
                Groupomania était le dernier et le plus gros projet. Nous devions faire le back grâce à ceux que nous avions appris lors du dernier projet 
                tout en rajoutant un framework. Le choix était libre donc je suis parti sur React.JS puisque j'avais pour objectif de créer des applications plus tard,
                et j'avais entendu parler de React Native.<br/><br/>
                Nous avions aussi plusieurs spécifications fonctionnelles:<br/><br/>
                - La présentation des fonctionnalités devait être simple.<br/>
                - La création d’un compte devait être simple et possible depuis un téléphone mobile.<br/>
                - Le profil devait contenir très peu d’informations pour que sa complétion soit rapide.<br/>
                - La suppression du compte devait être possible.<br/>
                - L’accès à un forum où les salariés publient des contenus multimédias devait être présent.<br/>
                - L’accès à un forum où les salariés publient des textes devait être présent.<br/>
                - Les utilisateurs doivaient pouvoir facilement repérer les dernières participations des employés.<br/>
                - Le ou la chargé-e de communication Groupomania devait pouvoir modérer les interactions entre salariés.
                </p>
            </div>
            <div className="project-footer">
                <h4>Liens utiles:</h4>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.Groupomania" target="_blank"><i class="fab fa-github-square"/></a>
                    <h5>Code Github</h5>
                </div>
            </div>
        </div>
    )

}

export default Groupomania;