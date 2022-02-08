import React, { useState } from "react";

import { NavLink } from "react-router-dom";

const Experience = () => {

    return (
        <section>
            <div className="formations">
                <NavLink exact to="/mes-formations"><i class="fas fa-arrow-left"/></NavLink>
                <h3>Expériences professionnelles</h3>
                        <div className="card-formation-first">
                            <div className="top-card-formation-first">
                                <i class="fas fa-arrow-circle-down"/>
                                <p>Intérim dans le bâtiment - 2017</p>
                            </div>
                            <div className="bottom-card-formation-first">
                                <p>Après une tentative d'étude en droit, je me décide de travailler pour avoir des économies le temps de trouver une idée de quoi faire.
                                    <br/>
                                    J'effectu alors plusieurs mission d'intérim dans le bâtiment: livraison, etc...
                                </p>
                            </div> 
                        </div>
                        <div className="card-formation-first">
                            <div className="top-card-formation-first">
                                <i class="fas fa-arrow-circle-down"/>
                                <p>Caissier - 2017</p>
                            </div>
                            <div className="bottom-card-formation-first">
                                <p>Après des problèmes de santé lié aux mission d'interim, j'ai eu l'occasion de faire caissier pour le Carrefour situé au Fonsorbes
                                    à la porte du Gers.
                                </p>
                            </div> 
                        </div>
                        <div className="card-formation-second">
                            <div className="top-card-formation-second">
                                <i class="fas fa-arrow-circle-down"/>
                                <p>Service civique - 2018</p>
                            </div>
                            <div className="bottom-card-formation-second">
                                <p>J'ai effectué mon service civique en 2018 pour la mairie de Fontenilles en tant que Bibliothécaire pendant preque un an.
                                    <br/>
                                    Mes missions consistaient à mettre en place des acitivités pour développer la culture des élèves, gérer l'aménagement, le rangement ainsi
                                    que l'inventaire.
                                </p>
                            </div> 
                        </div>
                        <div className="card-formation-second">
                            <div className="top-card-formation-second">
                                <i class="fas fa-arrow-circle-down"/>
                                <p>Animateur - 2018 / 2020</p>
                            </div>
                            <div className="bottom-card-formation-second">
                                <p>Dans un premier temps l'animation était là comme complément de salaire lors de mon service civique, en plus de compléter mes horaires de la
                                    journée. Mais après avoir échoué à reprendre mes études dans l'informatique, j'ai fais une nouvelle année d'animation.
                                    <br/>
                                    Mes missions consistaient à accompagner et suivre les élèves de maternelle et primaire, de créer des projets pour les aider à s'épanouir
                                    et les aider à gérer leurs émotions. Lors de voyage scolaire, je devais surveiller et avoir la responsabilités d'une trentaine d'élève.
                                </p>
                            </div> 
                        </div>
                </div>
        </section>
    )
}

export default Experience;