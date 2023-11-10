import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.scss';

function Home() {
  return (
    <section className='section-home'>
        <h1 className='title'>Bienvenue sur mon <br/> portfolio</h1>
        <p className="txt-home">
            Je suis Houda,
            développeuse web full-stack junior<br/>Javascript - React - Node.Js
        </p>
        <div className="container-icone">
            <div className="icone-code">
                <i className="fa-solid fa-code"></i><br />
                <span>front-end</span>
            </div>
            <div className="icone-code">
                <i className="fa-solid fa-database"></i><br />
                <span>back-end</span>
            </div>
        </div>  
        <div className='home-social'>
            <div className="link-social">
                    <Link to="https://github.com/hadhoudda"><i className='bx bxl-github'></i></Link>
                    <Link to="https://www.linkedin.com/in/houda-ben-abdallah-developpeuse-web/"><i className='bx bxl-linkedin'></i></Link>
                    <Link to="https://wa.me/+33622464454"><i className='bx bxl-whatsapp'></i></Link>
                    <Link to="mailto:ahhouda@yahoo.fr"><i className='bx bx-mail-send'></i></Link>
            </div>
            {/* <Link to="/cv.pdf"  className='btn-cv' download >Télécharger CV </Link> */}
            <a href="./cv.pdf" className='btn-cv'  download >Télécharger mon CV </a>
        </div> 
</section>
  )
}

export default Home;