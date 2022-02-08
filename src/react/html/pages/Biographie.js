import React from "react";

const Biographie = () => {

    return(
        <div className="biographie">
            <div className="profil">
                <a href="https://openclassrooms.com/fr/paths/556-developpeur-web#path-tabs" target="_blank" rel="noreferrer"><img src="./img/formation-open-classrooms.png" alt="formation OpenClassrooms"/></a>
                <div className="column">
                    <h2>Parcours</h2>
                    <p>
                    Après avoir obtenu mon baccalauréat littéraire en 2017, 
                    j'ai tenté plusieurs secteurs avant de me retourner vers une passion qui ne m'avait pas directement sauté aux yeux, l'informatique. <br/> 
                    En 2018, j'ai tenté pour la première fois de commencer mon aventure dans cette nouvelle voie. 
                    Je souhaitais intégrer le BTS Développeur Web et Web Mobile en alternance mais faute d'avoir trouvé une entreprise, 
                    j'ai finalement débuté ce diplôme en initial chez OpenClassrooms au cours de l'année 2020 - 2021. <br/> 
                    Apprendre en autonomie avec une formation en distanciel a été une première pour moi mais à force de persévérance et de maux de tête, 
                    j'ai finalement réussi à obtenir mon tant convoité titre RNCP Développeur Web ! Cependant mes envies avaient elles aussi évolué entre temps. 
                    J'avais envie de découvrir de nouvelle plateforme et après m'être renseigné sur le sujet, 
                    j'ai décidé de continuer avec un niveau licence : Développeur d'Application. 
                    En effet, le marché étant en constante évolution (une augmentation de 95% de l'utilisation depuis 2018 !), 
                    je pense que cela ne peut être que bénéfique pour mon futur de poursuivre mes études. <br/> 
                    Aujourd'hui je continue donc mes études pour obtenir ce niveau licence Développeur d'Application mobile spécialisé Java.
                    </p>
                </div>
            </div>
            <div className="objectif">
                <div className="top-card-biographie">
                    <h2>Objectifs</h2>
                    <p>
                    Actuellement j'ai plusieurs projets personnels qui m'aideront à m'améliorer en tant que Développeur. <br/> 
                    Le premier projet concerne mon côté Développeur Web. De nature créatif, j'ai écrit tout un univers avec une histoire qui l'accompagne.
                    J'aimerais la mettre en avant en créant un site web avec une partie forum ce qui me permettra d'échanger avec les visiteurs. <br/> 
                    En plus de mettre en avant mon univers, cela me permettra de continuer d'avancer cette histoire et de maintenir le site à jour. 
                    Côté professionnel, je vais apprendre à aller plus loin en essayer d'y intégrer une carte interactive avec des sons lors de passage sur les menus ou m'améliorer sur le Front !
                    Tant que je m'améliore, cela ne peut être qu'une bonne idée. <br/> 
                    Le deuxième projet concerne ma future formation de Développeur d'Application spécialisé Java. 
                    En effet, j'ai commencé à apprendre le langage Java en avance pour pouvoir être effectif le plus vite possible. 
                    Pour cela je suis des cours et des tutos de petits projets pour comprendre ce que j'étudie. <br/> 
                    J'ai quand même en parallèle une idée d'application à développer, mais ça je le garde pour plus tard !
                    </p>
                </div>
                <div className="bottom-card-biographie">
                    <a href="./img/different-menu-parasyte.png" target="_blank" rel="noreferrer"><img src="./img/different-menu-parasyte.png" alt="Menu site personnel"/></a>
                    <a href="./img/forum-parasyte.png" target="_blank" rel="noreferrer"><img src="./img/forum-parasyte.png" alt="Forum site personnel"/></a>
                    <a href="./img/pre-header-parasyte.png" target="_blank" rel="noreferrer"><img src="./img/pre-header-parasyte.png" alt="Header site personnel"/></a>
                    <a href="./img/carte-parasyte.jpg" target="_blank" rel="noreferrer"><img src="./img/carte-parasyte.jpg" alt="Carte site personnel"/></a>
                </div>
            </div>
        </div>
    )

}

export default Biographie;