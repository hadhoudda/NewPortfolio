import React from "react";
import { useParams } from "react-router-dom";
import '../styles/details.scss';
import data from '../data/data.json'
import NotFound from "./NotFound";
import ProjectDescrption from '../components/ProjectDescrption';

const Details = () => {
    let userId = useParams();
    const project = data.find((card) => card.id === userId.id);
    if (!project) {
        return <NotFound />
    }
     return (
        <div className="container-details">
            <ProjectDescrption  project={project} key={project?.id} />
        </div>
    )
}

export default Details