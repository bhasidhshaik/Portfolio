import React from "react";
import techStack from "./skills-data";

function Skills() {
  return (
    <div className="skill-container">
      {techStack.map((tech, i) => (
        <div className="each-skill-type" key={i}>
          <div className="each-skill-type-heading">
            <h3>{tech.type}</h3>
          </div>
          <div className="each-skills-list">
            {tech.technologies.map((technology, j) => (
              <div className="each-skill" key={j}>
                <span
                  className="icon"
                  dangerouslySetInnerHTML={{ __html: technology.imagePath }}
                ></span>
                <span className="name">{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
