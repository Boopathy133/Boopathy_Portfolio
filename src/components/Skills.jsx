import React from 'react'
import SkillCard from './SkillCard';

import figma from "../assets/figma.svg"
import css from "../assets/css3.svg"
import javascript from "../assets/javascript.svg"
import nodejs from "../assets/nodejs.svg"
import mongodb from "../assets/mongodb.svg"
import react from "../assets/react.svg"
import tailwindcss from "../assets/tailwindcss.svg"
import WampServer from "../assets/WampServer.png"

const Skills = () => {
    const skillItem = [
        {
            imgSrc: figma,
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: react,
            label: 'React',
            desc: 'Framework'
        },
        {
            imgSrc: tailwindcss,
            label: 'TailwindCSS',
            desc: 'User Interface'
        },
        {
            imgSrc: css,
            label: 'CSS',
            desc: 'User Interface'
        },
        {
            imgSrc: javascript,
            label: 'JavaScript',
            desc: 'Interaction'
        },
        {
            imgSrc: nodejs,
            label: 'NodeJS',
            desc: 'Web Server'
        },
        {
            imgSrc: mongodb,
            label: 'MongoDB',
            desc: 'Database'
        },
        {
            imgSrc: WampServer,
            label: 'WampServer',
            desc: 'Local DataBase'
        },
    ];
    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">Tools I use</h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Discover the powerful tools and technologies I use to design and create exceptional, high-performing websites & applications.
                </p>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
                    {skillItem.map(({imgSrc, label, desc}, key) =>(
                        <SkillCard key={key} classes="reveal-up" imgSrc={imgSrc} label={label} desc={desc}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills