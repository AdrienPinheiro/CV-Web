import React from "react";

import { NavLink } from "react-router-dom";

const Chouette = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i class="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 4:</h3>
                    <h4>La Chouette Agence</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./img/project/chouette.png"/>
                <p>
                Ce projet était un peu spécial. Nous devions passer derrière le travail d'un autre developpeur et optimiser le site web.<br/>
                L'objectif était d'avoir un site plus rapide et respectant le W3C. Je suis aller plus loin en respectant les différentes chartes
                OWASP, SEO ou encore quelques éléments Opquast.
                </p>
            </div>
            <div className="project-footer">
                <h4>Liens utiles:</h4>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.ChouetteAgenceVierge" target="_blank"><i class="fab fa-github-square"/></a>
                    <h5>Code Github Vierge</h5>
                </div>
                <div className="project-footer-page">
                    <a href="https://adrienpinheiro.github.io/AdrienPinheiro.ChouetteAgenceVierge/" target="_blank"><i class="fas fa-pager"></i></a>
                    <h5>Page Internet De Base</h5>
                </div>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.LaChouetteAgence" target="_blank"><i class="fab fa-github-square"/></a>
                    <h5>Code Github Modifié</h5>
                </div>
                <div className="project-footer-page">
                    <a href="https://adrienpinheiro.github.io/AdrienPinheiro.LaChouetteAgence/" target="_blank"><i class="fas fa-pager"></i></a>
                    <h5>Page Internet Modifié</h5>
                </div>
            </div>
        </div>
    )

}

export default Chouette;