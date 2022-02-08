import React from "react";

import { NavLink } from "react-router-dom";

const Reservia = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i className="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 2:</h3>
                    <h4>Réservia</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./img/project/reservia.png" alt="Projet 2"/>
                <p>
                Dans ce projet, nous commençons enfin à coder ! Nous apprennons les bases en HTML5 et CSS3.<br/><br/>
                Nous avons eu une maquette fournis avec des demandes particulières comme :<br/><br/>
                - Les usagers pourront rechercher des hébergements dans la ville de leur choix. En
                revanche le bouton de recherche ne sera pas fonctionnel. <br/>
                - Chaque carte d’hébergement ou d’activité devait être cliquable dans son intégralité mais 
                les liens restaient vides. <br/>
                - Les filtres n'étaient pas fonctionnels pour cette version, en revanche, ils devaient changer
                d’apparence au survol. <br/>
                - Dans le menu, les liens “Hébergements” et “Activités” sont des ancres qui devaient mener
                aux sections de la page.
                </p>
            </div>
            <div className="project-footer">
                <h4>Liens utiles:</h4>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.Reservia" target="_blank" rel="noreferrer"><i className="fab fa-github-square"/></a>
                    <h5>Code Github</h5>
                </div>
                <div className="project-footer-page">
                    <a href="https://adrienpinheiro.github.io/AdrienPinheiro.Reservia/" target="_blank" rel="noreferrer"><i className="fas fa-pager"></i></a>
                    <h5>Page Internet</h5>
                </div>
            </div>
        </div>
    )

}

export default Reservia;