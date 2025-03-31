import React from 'react'
import ProjectCard from './ProjectCard';

import project1 from "../assets/project-1.jpg"
// import project2 from "../assets/project-2.jpg"
// import project3 from "../assets/project-3.jpg"
// import project4 from "../assets/project-4.jpg"
// import project5 from "../assets/project-5.jpg"
// import project6 from "../assets/project-6.jpg"

import E_Commerce_Clothes from "../assets/E-Commerce-Clothes.png"
import UI_Challenge_1 from "../assets/UI_Challenge-1.png"
import UI_Challenge_3 from "../assets/UI_Challenge-3.png"
import Dashboard_Img from "../assets/DashBoard.png"
import Collaborative_Design_Tool from "../assets/Collaborative_1.png"
import SafeSphere from "../assets/SafeSphere.webp"
import E_Commerce_Code from "../assets/E-Commerce-Code.png"
import RailwayReservationSystem from "../assets/RailwayReservationSystem.png"



const Work = () => {
  const works = [
    {
      imgSrc: E_Commerce_Clothes,
      title: 'E-Commerce Clothing website Design',
      tags: ['Design', 'Figma'],
      projectLink: 'https://github.com/Boopathy133/E-Commerce-Website.git'
    },
    {
      imgSrc: Dashboard_Img,
      title: 'Dashboard Design',
      tags: ['UI-design', 'Figma'],
      projectLink: 'https://github.com/Boopathy133/CoderOne-Project-1.git'
    },
    {
      imgSrc: Collaborative_Design_Tool,
      title: 'Collaborative Design Tool',
      tags: ['Design', 'Figma', 'Figma-UI'],
      projectLink: 'https://github.com/Boopathy133/CoderOne-Project-2.git'
    },
    {
      imgSrc: UI_Challenge_1,
      title: 'Sport Acadamy Landing Page',
      tags: ['Design', 'Figma'],
      // projectLink: ''
    },
    {
      imgSrc: UI_Challenge_3,
      title: 'Spotify Landing Page',
      tags: ['Design', 'Figma'],
      // projectLink: ''
    },
    {
      imgSrc: SafeSphere,
      title: 'SafeSphere',
      tags: ['Arduino Uno', 'MQ-32 sensor', 'DHT11 sensor'],
      projectLink: 'https://github.com/Boopathy133/SafeSphere.git'
    },
    {
      imgSrc: E_Commerce_Code,
      title: 'E-Commerce-Clothes',
      tags: ['React', 'CSS'],
      projectLink: 'https://github.com/Boopathy133/E-Commerce-Website.git'
    },
    {
      imgSrc: RailwayReservationSystem,
      title: 'Railway Reservation System',
      tags: ['Java', 'JavaFX', 'wamp server','Apache NetBeans'],
      // projectLink: 'https://github.com/Boopathy133/E-Commerce-Website.git'
    },
  ];
  return (
    <section className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work