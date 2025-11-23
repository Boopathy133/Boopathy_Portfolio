import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import UpComing from './components/UpComing'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ReactLenis from 'lenis/react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import ProjectDetails from './pages/ProjectDetails'
// import './App.css'

// REGISTE GSAP
gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    })

  })

  return (
    <BrowserRouter>


      <ReactLenis root>

        <Routes>

          <Route path='/' element={
            <>
              <Header />
              <main>
                <Hero />
                <About />
                <Skills />
                <Work />
                <UpComing />
                {/* <Review /> */}
                <Contact />
              </main>
              <Footer />
            </>
          } />

          <Route path='/projects/:id' element={<ProjectDetails />} />

        </Routes>

      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
