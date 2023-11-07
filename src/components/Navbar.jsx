import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

function Navbar() {
    const [toggleMenu, setToggleMenu ] = useState (false);

    const toggleNavSmallScreen =() => {
        setToggleMenu (!toggleMenu);

    }

  return (
    <nav className='nav-responsive'>
        <ul className={toggleMenu ? "liste": "liste-responsive" }>
            <li className="items"><Link to = '/Portfolio'>Accueil </Link></li>
            <li className="items"><Link to = '/Portfolio/profil'>A propos </Link></li>
            <li className="items"><Link to = '/Portfolio/competance'>Compétences </Link></li>
            <li className="items"><Link to = '/Portfolio/portfolio'>Projets</Link></li>
            <li className="items"><Link to = '/Portfolio/contact'>Contact </Link></li>
        </ul>
        <div onClick={toggleNavSmallScreen} ><i className={toggleMenu  ? "fa-solid fa-bars btn" :"fa-solid fa-xmark btn "  }></i> </div>
    </nav>
  )
}

export default Navbar;