import React from "react";

import { NavLink } from "react-router-dom";

const Orinoco = () => {

    return(

        <div className="project">
            <div className="project-header">
                <NavLink exact to="/scolaires" className="arrow"><i className="fas fa-arrow-left"/></NavLink>
                <div className="project-header-title">
                    <h3>Projet 5:</h3>
                    <h4>Orinoco</h4>
                </div>
            </div>
            <div className="project-body">
                <img src="./img/project/orinoco.png" alt="Projet 5"/>
                <p>
                L'objectif de ce projet était de créer un site e-commerce, enfin plus de travailler l'échange avec une API plutôt que de ce focaliser
                sur l'apparence !<br/><br/>
                Le site était composé de 4 pages:<br/><br/>
                - Une page de vue sous forme de liste, montrant tous les articles disponibles à la vente.<br/>
                - Une page “produit”, qui affiche de manière dynamique l'élément sélectionné par l'utilisateur et lui permettait de personnaliser le produit 
                et de l'ajouter à son panier.<br/>
                - une page “panier” contenant un résumé des produits dans le panier, le prix total et un formulaire permettant de passer une commande. 
                Les données du formulaire doivaient être correctes et bien formatées avant d'être renvoyées au back-end. 
                Par exemple, pas de texte dans les champs date. <br/>
                - Une page de confirmation de commande, remerciant l'utilisateur pour sa commande, et indiquant le prix total 
                et l'identifiant de commande envoyé par le serveur.
                </p>
            </div>
            <div className="project-footer">
                <h4>Liens utiles:</h4>
                <div className="project-footer-github">
                    <a href="https://github.com/AdrienPinheiro/AdrienPinheiro.Orinoco" target="_blank" rel="noreferrer"><i className="fab fa-github-square"/></a>
                    <h5>Code Github</h5>
                </div>
            </div>
        </div>
    )

}

export default Orinoco;