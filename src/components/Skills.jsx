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
import express from "../assets/express-js.png"
import TypeScripts from "../assets/ts.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import mysql from "../assets/mysql.png"
import postman from "../assets/postman.svg"

const Skills = () => {
    const skillItem = [
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
            imgSrc: express,
            label: 'Express.js',
            desc: 'Web Server'
        },
        {
            imgSrc: TypeScripts,
            label: 'TypeScript',
            desc: 'Framework'
        },
        {
            imgSrc: figma,
            label: 'Figma',
            desc: 'Design tool'
        },
        {
            imgSrc: WampServer,
            label: 'WampServer',
            desc: 'Local DataBase'
        },
        {
            imgSrc: git,
            label: 'Git',
            desc: 'Version Control'
        },
        {
            imgSrc: github,
            label: 'github',
            desc: 'Version Control'
        },
        {
            imgSrc: mysql,
            label: 'MySQL',
            desc: 'DataBase'
        },
        {
            imgSrc: postman,
            label: 'Postman',
            desc: 'API Testing tool'
        },
    ];
    return (
        // <section className="section">
        //     <div className="container">
        //         <h2 className="headline-2 reveal-up">My Tech Stack</h2>

        //         <p className="text-zinc-400 mt-3 mb-8 max-w-[90ch] reveal-up">
        //             The powerful tools and technologies I use to design and create exceptional, high-performing websites & applications.
        //         </p>

        //         <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
        //             {skillItem.map(({ imgSrc, label, desc }, key) => (
        //                 <SkillCard key={key} classes="reveal-up" imgSrc={imgSrc} label={label} desc={desc} />
        //             ))}
        //         </div>
        //     </div>
        // </section>


        <section className="section">
            <div className="container">
                <h2 className="headline-2 reveal-up">My Tech Stack</h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[90ch] reveal-up">
                    The powerful tools and technologies I use to design and create exceptional, high-performing websites & applications.
                </p>

                {/* Grid: 2 columns on mobile, original on md+ */}
                <div
                    className="grid grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Skills