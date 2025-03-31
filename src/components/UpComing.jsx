import React from 'react'
import UpComingCard from './UpComingCard'

const Work = () => {
    const nextProjects = [
        {
            title: 'Bus Search System',
            tags: ['React Js', 'Tailwind CSS', 'JavaScript', 'MongoDB Atlas'],
            projectLink : 'https://github.com/Boopathy133/Bus-Search-System.git'
        },
        {
            title: 'Digital Canteen',
            tags: ['React Js', 'Tailwind CSS', 'Node.js', 'Express', 'Excel(Prior)', 'MongoDB Atlas'],
            projectLink : 'https://github.com/Boopathy133/Digital-Canteen.git'
        },
        {
            title: 'EV-Battery-Reuse',
            tags: ['Figma', 'UI Design', 'WireFraming', 'Prototyping']
        },
    ];
    return (
        <section className="section" id="UpComing">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Current Projects
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