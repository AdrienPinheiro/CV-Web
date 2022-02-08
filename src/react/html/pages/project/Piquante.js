import React from "react";

import { NavLink } from "react-router-dom";

const Piquante = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i className="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 6:</h3>
                    <h4>Piquante</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./img/project/piquante.png" alt="Projet 6"/>
                <p>
                Dans ce projet, nous devions créer une api et donc apprendre à faire du back pour la première fois ! <br/><br/>
                Nous avions plusieurs consignes:<br/><br/>
                - L’API doit respecter le RGPD et les standards OWASP.<br/>
                - Le mot de passe des utilisateurs devait être chiffré.<br/>
                - 2 types de droits administrateur à la base de données doivaient être définis : un accès pour supprimer ou modifier des tables, 
                et un accès pour éditer le contenu de la base de données.<br/>
                - La sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB Atlas) devait être faite de telle sorte que le validateur 
                puisse lancer l’application depuis sa machine.<br/>
                - L’authentification était renforcée sur les routes requises.<br/>
                - les adresses mails de la base de données étaient uniques et un plugin Mongoose approprié était utilisé pour s’assurer de leur caractère unique 
                et rapporter des erreurs.
                </p>
            </div>
            <div className="project-footer">
                <h4>Liens utiles:</h4>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.Piquante" target="_blank" rel="noreferrer"><i className="fab fa-github-square"/></a>
                    <h5>Code Github</h5>
                </div>
            </div>
        </div>
    )

}

export default Piquante;