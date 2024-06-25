import React from "react";
import Navbar from "./Navbar";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div>
      <h2>Proyectos</h2>
      <Navbar />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name}/>
            <p>{project.description}</p>
            <a href={project.url} target="_blank">
              View Project
            </a>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Projects;
