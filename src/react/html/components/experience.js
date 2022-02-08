import React from "react";

import { NavLink } from "react-router-dom";

const Experience = () => {

    return (
        <section>
            <div className="formations">
                <NavLink exact to="/mes-formations"><i className="fas fa-arrow-left"/></NavLink>
                <h3>Expériences professionnelles</h3>
                        <div className="card-formation-first">
                            <div className="top-card-formation-first">
                                <i className="fas fa-arrow-circle-down"/>
                                <p>Intérim dans le bâtiment - 2017</p>
                            </div>
                            <div className="bottom-card-formation-first">
                                <p>Après des études en droit, je me décide à travailler pour avoir des économies le temps de trouver ma voie.
                                    <br/>
                                    J'effectue alors plusieurs missions d'intérim dans le bâtiment: livraison, etc...
                                </p>
                            </div> 
                        </div>
                        <div className="card-formation-first">
                            <div className="top-card-formation-first">
                                <i className="fas fa-arrow-circle-down"/>
                                <p>Caissier - 2017</p>
                            </div>
                            <div className="bottom-card-formation-first">
                                <p>Emploi de caissier pour le Carrefour situé à Fonsorbes à la porte du Gers.
                                </p>
                            </div> 
                        </div>
                        <div className="card-formation-second">
                            <div className="top-card-formation-second">
                                <i className="fas fa-arrow-circle-down"/>
                                <p>Service civique - 2018</p>
                            </div>
                            <div className="bottom-card-formation-second">
                                <p>J'ai effectué mon service civique en 2018 pour la mairie de Fontenilles en tant que Bibliothécaire pendant un an.
                                    <br/>
                                    Mes missions consistaient à mettre en place des activités pour développer la culture des élèves, gérer l'aménagement, le rangement ainsi
                                    que l'inventaire.
                                </p>
                            </div> 
                        </div>
                        <div className="card-formation-second">
                            <div className="top-card-formation-second">
                                <i className="fas fa-arrow-circle-down"/>
                                <p>Animateur - 2018 / 2020</p>
                            </div>
                            <div className="bottom-card-formation-second">
                                <p> Lors de mon service civique, en complément de salaire, j'ai eu l'occasion de travailler dans l'animation en plus de compléter mes horaires de la
                                    journée. Mais après une année dans ce domaine, j'ai décidé de refaire une deuxième année le temps de peaufiner mon projet professionnel.
                                    <br/>
                                    Mes missions consistaient à accompagner et suivre les élèves de maternelle et primaire, de créer des projets pour les aider à s'épanouir
                                    et les aider à gérer leurs émotions. Lors d'un voyage et de sortie scolaire, je devais surveiller et avoir la responsabilité d'une trentaine d'élèves.
                                </p>
                            </div> 
                        </div>
                </div>
        </section>
    )
}

export default Experience;