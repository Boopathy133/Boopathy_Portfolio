import React from 'react'
import UpComingCard from './UpComingCard'
import { nextProjects } from "../data/UpComingProjects";

const Work = () => {
    
    return (
        <section className="section" id="UpComing">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    {/* On-Going Projects */}
                    Yet to Success
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                    {nextProjects.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <UpComingCard key={key} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work