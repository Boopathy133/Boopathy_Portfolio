import React from 'react'
import Logo from "../assets/Logo.png"



const aboutItems = [
  {
    label: 'Experience',
    number: 'Fresher'
  },
  {
    label: 'Project done',
    number: 9
  },
  {
    label: 'Current Project',
    number: 3
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          {/* <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            I Consider myself a responsible and orderly person. I stay updated with the latest trends and tools in
            <span className='text-orange-400 font-bold text-2xl'> UI/UX Design</span> and <span className='text-orange-400 font-bold text-2xl'>Frontend Development</span> to ensure impactful work. My goal is to join a dynamic team that values collaboration,
            creative and fostering professional growth and success. Adept at designing responsive, high-performance User Interface.
          </p> */}
          <p className='mb-5'>
          I am a <span className='text-orange-400 font-bold text-2xl'>UI/UX designer</span> and <span className='text-orange-400 font-bold text-2xl'>Frontend Developer</span> passionate about creating visually appealing and User-friendly digital experiences. 
          With expertise in React, JavaScript, HTML, and CSS, I design and develop seamless web applications that prioritize User Experience 
          and functionality. My skills extend beyond Frontend Development, as I have worked on full-stack projects, integrating databases to build efficient and scalable applications.
          <br /> <br />
          My expertise spans UI/UX design, Web Development, backend integration  making me a versatile and innovative 
          developer. I am always eager to explore new technologies and enhance user experiences with cutting-edge solutions.
          </p>
          <div className="flex flex-wrap items-center gap-8 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl text-orange-400">{number}</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>

            ))}

            <img src={Logo} alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h[40px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About