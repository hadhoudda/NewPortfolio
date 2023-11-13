import React from "react";
import '../styles/projects.scss';
import data from '../data/data.json'
import Card from '../components/Card';


function Projects() {
  return (
    <div className="container-portfolio" id="project">
        <h2 className='title-portfolio'>Mon portfolio</h2>
        <section className='content-portfolio'>
            {data &&
            data.length > 0 &&
            data.map((card) => {
                return (<Card project={card} key={card?.id} />);
            })}
        </section>
    </div>
  )
}

export default Projects ;