import React from 'react'
import Card from './Card'
import projects from './projects-data'

function Projects() {
  return (
    <section className="page02 projects-section" id="projects">
      <div className="projects-section-container">

        <div className="page02-header">
          <h2>Projects</h2>
        </div>
        <div className="projects-cards-container">
          {projects.map((project , i)=>{
            return <Card key={i} project={project} />
          })}
        </div>
        <div className="more-projects-link">
          <a href="https://github.com/bhasidhshaik/">
            <button className="learn-more">
              <span aria-hidden="true" className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">More Projects</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects