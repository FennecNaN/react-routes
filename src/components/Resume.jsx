import React from "react";
import Navbar from "./Navbar";
import { studies, experiences } from "../data/resume";

const Resume = () => {
  return (
    <div>
      <h2>Curriculum</h2>
      <Navbar />
      <h3>Experiencia laboral</h3>

      <ul>
        {experiences.map((exp) => (
          <li key={exp.id}>
            <h4>
              {exp.title} en la compañia {exp.company}
            </h4>
            <p>{exp.date}</p>
          </li>
        ))}
      </ul>

      <h3>Educación</h3>

      <ul>
        {studies.map((study) => (
          <li key={study.id}>
            <h4>{study.title}</h4>
            <p>{study.institution}</p>
            <p>{study.date}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Resume;
