import React from "react";

const Biographie = () => {

    return(
        <div className="biographie">
            <div className="profil">
                <img src="./img/AdrienPinheiro-img.jpg"/>
                <div className="column">
                    <h2>Parcours</h2>
                    <p>
                        Après avoir obtenu mon baccalauréat littéraire en 2017, 
                        j'ai tenté plusieurs voies avant de me retourner vers une passion qui ne m'avait pas directement sauté aux yeux, l'informatique.
                        <br/>
                        Après avoir tenté une première fois de commencer mon aventure dans cette nouvelle idée en 2018 en alternance pour avoir un BTS
                        développeur web et web mobile, je l'ai finalement fait en parcours classique chez OpenClassrooms en 2020.
                         <br/>
                        Apprendre en autonomie avec une formation en distanciel a été une première pour moi, mais force de persévérance et de maux de tête,
                        j'ai finalement réussi  à obtenir mon tant convoité titre RNCP Développeur Web ! Mais mes envies avait aussi évolué entre temps, 
                        j'avais envie de découvrir de nouvelle plateforme et, après m'être renseigné sur le sujet, avait décidé de continuer sur 
                        un niveau licence : Développeur d'application.
                        En effet, le marché étant de plus en plus développer (une augmentation de 80% de l'utilisation depuis 2018 !), 
                        je pense que cela ne peut être que bénéfique pour mon futur de ne pas m'arrêter à mon BTS.
                        <br/>
                        Aujourd'hui je continue donc mes études pour obtenir ce niveau licence Développeur d'application mobile spécialisé Java.
                    </p>
                </div>
            </div>
            <div className="objectif">
                <div className="top-card-biographie">
                    <h2>Objectifs</h2>
                    <p>
                        Actuellement j'ai plusieurs projets personnels qui m'aideront à m'améliorer en tant que développeur.
                        <br/>
                        Le premier concerne mon côté développeur web. De nature créatif, j'ai écrit tout un univers avec une histoire qui l'accompagne.
                        J'aimerais la mettre en avant en créant un site web avec une partie forum ceux qui me permettra d'échanger avec les visiteurs.
                        <br/>
                        En plus de mettre en avant mon univers, cela me permettra de continuer d'avancer cette histoire et de maintenir le site à jour.
                        Côté professionnel, je vais apprendre à aller plus loin en essayer d'y intégrer une carte interactive avec des sons lors de passage sur les menus
                        ou m'améliorer sur le Front ! Tant que je m'améliore, cela ne peut être qu'une bonne idée.
                        <br/>
                        Le deuxième concerne ma future formation développeur d'application spécialisé Java. En effet, j'ai commencé à apprendre le langage Java en avance pour
                        pouvoir être effectif le plus vite possible. Pour cela je suis des cours et des tutos de petits projets pour comprendre ce que j'étudie.
                        <br/>
                        J'ai quand même en parallèle une idée d'application à développer, mais ça je le garde pour plus tard !
                    </p>
                </div>
                <div className="bottom-card-biographie">
                    <img src="./img/pre-header-parasyte.png"/>
                    <img src="./img/different-menu-parasyte.png"/>
                    <img src="./img/forum-parasyte.png"/>
                    <img src="./img/carte-parasyte.jpg"/>
                </div>
            </div>
        </div>
    )

}

export default Biographie;