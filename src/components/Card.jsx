import React  from 'react';
import '../styles/card.scss'
import { Link } from 'react-router-dom';

function Card({project}) {
 return(
    <div className='card-project' >
        <img className='img-project' src={ project?.picture }  alt={"l'image de " + project?.title}/>
        <h4 className='title-card'> {project?.title}</h4>
        <div className="content-btn">
            <Link to={project?.link} target="_blank">
                <button className='btn-project'>
                    {project?.titleLink} <i className='bx bx-chevron-right'></i>
                </button> 
            </Link>
            {/* <Link to ={`/portfolio/details/${project.id}`} > */}
            <Link to ={`/${project.id}`} >
                <button className='btn-project'>
                    Plus d'indos <i className='bx bx-chevron-right'></i>
                </button>
            </Link>
        </div>
    </div>
    )
}  

export default Card ;