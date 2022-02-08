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
                Ce projet était un peu spécial. <br/>
                Nous devions passer derrière le travail d'un autre developpeur et optimiser le site web.<br/>
                L'objectif était d'avoir un site plus rapide et respectant le W3C. Je suis aller plus loin en respectant les différentes chartes
                OWASP, SEO ou encore quelques éléments Opquast.<br/><br/>
                Nous avions pour cela une check liste pour nous aider:<br/><br/>
                - La couleur : le constrate des couleurs devait être conforme aux exigences de niveau AA du WCAG 2.1. Un contraste dont le ratio est de 4.5:1
                pour les textes normaux.<br/>
                - La visibilité : les techniques de masquage de contenu, telles que l'opacité nulle, l'ordre d'indexation en « z » et le placement hors écran,
                 ne devaient être utilisées exclusivement pour gérer la visibilité. <br/>
                - Le focus : tous les éléments activables devaient être focusables. Les contrôles standard tels que les liens, les boutons et les champs de formulaire 
                devaient être accessibles par défaut.<br/>
                - Les équivalents textuels : un équivalent textuel devait être fourni pour chaque élément non textuel non strictement présenté dans l'application.<br/>
                - La gestion des états : les contrôles standard tels que les boutons radio et les cases à cocher devaient être gérés par le système d'exploitation. 
                Cependant, pour d'autres contrôles personnalisés, les changements d'état devaient être fournis via les états ARIA tels que aria-checked, 
                aria-disabled, aria-selected, aria-expanded et aria-pressed.
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