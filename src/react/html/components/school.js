import React from "react";

import { NavLink } from "react-router-dom";

const School = () => {

    return (
        <section>
            <div className="school">
                <NavLink exact to="/mes-formations" className="arrow"><i class="fas fa-arrow-left"/></NavLink>
                <h3>Formation scolaires</h3>
                    <div className="card-school-first">
                        <div className="top-card-school-first">
                            <i class="fas fa-arrow-circle-down"/>
                            <p>Baccalauréat littéraire - 2017</p>
                        </div>
                        <div className="bottom-card-school-first">
                            <p>Après une tentative d'étude en droit, je me décide de travailler pour avoir des économies le temps de trouver une idée de quoi faire.
                                <br/>
                                J'effectu alors plusieurs mission d'intérim dans le bâtiment: livraison, etc...
                            </p>
                        </div> 
                    </div>
                    <div className="card-school-second">
                        <div className="top-card-school-second">
                            <i class="fas fa-arrow-circle-down"/>
                            <p>Développeur web et web mobile</p>
                        </div>
                        <div className="bottom-card-school-second">
                            <p>Formation effectué avec OpenClassrooms en distanciel.
                                <br/>
                                Suivis par un mentor avec un rendez-vous hebdomadaire, j'ai du rendre 7 projets évalués pour pouvoir obtenir mon titre RNCP.
                            </p>
                            <div className="frise">
                                <ol>
                                    <li>
                                        <NavLink exact to="/veille">
                                        <div className="eve">
                                            <time>7 Janvier 2021</time>
                                            <br/>
                                            Veille technologique
                                        </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/reservia">
                                        <div className="reservia">
                                            <time>24 Février 2021</time>
                                            <br/>
                                            Réservia
                                        </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/ohmyfood">
                                        <div className="ohmyfood">
                                            <time>9 Avril 2021</time>
                                            <br/>
                                            Ohmyfood
                                        </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/la-chouette-agence">
                                        <div className="chouette">
                                            <time>13 Mai 2021</time>
                                            <br/>
                                            La chouette agence
                                        </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/orinoco">
                                        <div className="orinoco">
                                            <time>29 Juin 2021</time>
                                            <br/>
                                            Orinoco
                                        </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/piquante">
                                        <div className="piquante">
                                            <time>22 Juillet 2021</time>
                                            <br/>
                                            Piquante
                                        </div>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink exact to="/groupomania">
                                        <div className="groupomania">
                                            <time>28 Août 2021</time>
                                            <br/>
                                            groupomania
                                        </div>
                                        </NavLink>
                                    </li>
                                </ol>
                            </div>
                        </div> 
                    </div>
                </div>
        </section>
    )
}

export default School;