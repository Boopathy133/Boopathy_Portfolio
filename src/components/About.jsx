const aboutItems = [
  {
    label: 'Experience',
    number: 'Fresher',
    period: ''
  },
  {
    label: 'Intern Experience',
    number: '6+',
    period: '(months)'
  },
  {
    label: 'Live Projects',
    number: '1',
    period: ''
  },
  {
    label: 'Mini Projects',
    number: 9,
    period: ''
  },
  {
    label: 'Ongoing Project',
    number: 3,
    period: ''
  }
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className='mb-5 text-zinc-300 md:mb-8 md:text-xl'>
            I’m a dedicated <span className='text-orange-400 font-semibold'> UI/UX Designer, Frontend Developer </span> and
            <span className='text-orange-400 font-semibold'> Backend Integrator</span> skilled in creating intuitive,
            high-performance digital experiences. With expertise in React.js, Node.js, JavaScript and backend-driven
            data systems - along with proficiency in Java, PHP and MySQL -<span className='text-orange-400 font-bold'> I build complete end-to-end solutions</span>.

            <br></br>
            <br></br>

            I work across the full product lifecycle - from understanding user needs and designing clear interfaces to
            developing responsive <span className='text-orange-400 font-semibold'> front-end screens and integrating backend workflows.</span> This versatility allows me to
            build complete, end-to-end solutions that balance user expectations with technical requirements. I have
            experience developing systems such as shopping platforms, admin dashboards, and AI-powered applications,
            ensuring strong usability, performance, and reliability in every project.

            <br></br>
            <br></br>

            As a creative technologist, I blend design thinking with engineering precision, continually exploring new
            tools and methods to refine my craft. I enjoy solving real-world problems, improving workflows, and
            transforming ideas into seamless, efficient, and meaningful digital products. <br/> 
            <span className='text-orange-400 font-semibold'>My goal is to deliver work
            that is visually appealing, technically sound and genuinely valuable to users.</span>
          </p>
          <div className="flex flex-wrap items-baseline gap-8 md:gap-7">
            {aboutItems.map(({ label, number, period }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-3xl text-orange-400">{number}</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
                <p className="text-sm text-zinc-400">{period}</p>
              </div>

            ))}

            {/* <img src={Logo} alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h[40px]" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About