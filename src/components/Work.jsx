import React from 'react'
import ProjectCard from './ProjectCard';
import { CompletedProjects } from "../data/CompletedProjects";


const Work = () => {
  
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My Succes
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {CompletedProjects.map(({ id, imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} id={id} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work