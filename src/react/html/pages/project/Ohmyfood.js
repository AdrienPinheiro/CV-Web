import React from "react";

import { NavLink } from "react-router-dom";

const Ohmyfood = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i className="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 3:</h3>
                    <h4>Ohmyfood</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./img/ohmyfood.png" alt="Projet 3"/>
                <p>Dans ce nouveau projet, nous apprenions le responsive. Nous devions faire un site web d'une startup qui voulait s'imposer sur le marché de la
                    restauration.<br/><br/>
                    Pour cela nous devions :<br/><br/>
                    - Respecter une identité graphique (police / logo / titre / couleur)<br/>
                    - Ne pas utiliser de framework. <br/>
                    - Utiliser des effets accessibles au clic ou au survol sur la maquette. Ils devaient utiliser
                    les animations ou transitions CSS, sans JavaScript ni de librairie
                </p>
            </div>
            <div className="project-footer">
                <h4>Liens utiles:</h4>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.Ohmyfood" target="_blank" rel="noreferrer"><i className="fab fa-github-square"/></a>
                    <h5>Code Github</h5>
                </div>
                <div className="project-footer-page">
                    <a href="https://adrienpinheiro.github.io/AdrienPinheiro.Ohmyfood/" target="_blank" rel="noreferrer"><i className="fas fa-pager"></i></a>
                    <h5>Page Internet</h5>
                </div>
            </div>
        </div>
    )

}

export default Ohmyfood;