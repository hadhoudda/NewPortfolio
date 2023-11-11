import React from "react";
import '../styles/apropos.scss'
import profil from "../assets/profil.webp"

function Apropos() {
    return (
        <section className="container-profil profil" >
                <h2 className="title-profil">À propos de moi</h2>
                <div className="contenu-profil">
                    <img className ="photo-profil" src={profil} alt='profil__houda' />
                    <p>
                        Hello 😊! Je m’appelle Houda, développeuse Web fullstack junior, passionnée 
                        par le développement front-end et back-end, assoiffée de nouvelles connaissances, d'apprendre de nouvelles techniques
                        curieuse, autonome et ayant l'esprit d’équipe..<br></br>
                        Ayant toujours été passionnée par l'informatique, j'ai décidé de me lancer dans 
                        cette formation afin de me spécialiser dans le développement web, et de pouvoir exercer un métier qui me passionne.<br></br>
                        N'hésitez pas à me contacter pour on savoir plus sur mon parcours et mes projets.
                    </p>

            </div>
        </section>
    )
}

export default Apropos;