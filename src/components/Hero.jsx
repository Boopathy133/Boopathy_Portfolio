import React from 'react'
import hero_Baner from '../assets/hero-banner.png';
import avator_1 from '../assets/avatar-1.jpg'
import { ButtonPrimary, ButtoonOutline } from './Button';


const Hero = () => {
    return (
        <section className="pt-28 lg:pt-36" id="home">
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        {/* <figure className="img-box w-9 h-9 rounded-lg">
                            <img src={avator_1} width={40} height={40} alt="Boopathy_Image" className='img-cover' />
                        </figure> */}
                        <div className="flex items-center gap-1.5 text-orange-400 text-sm tracking-wide font-semibold">
                            <span className="relative w-2 h-2 rounded-full bg-blue-400">
                                <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping"></span>
                            </span>
                            Available for work
                        </div>
                    </div>
                        <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                            Hi! <br /> I&apos;am Boopathy
                        </h2>
                    <div className="flex items-center gap-3">
                        <ButtonPrimary label="Resume" href="https://drive.google.com/drive/folders/1kC3SJUh7q6J64Gb9S2RbMcS590qtKN0X?usp=sharing" />
                        <ButtoonOutline href="#about" label="Sroll down" icon="arrow_downward" />
                    </div>
                </div>
                <div className="hidden lg:block">
                    {/* <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                        <img src={hero_Baner} width={656} height={800} alt="Boopathy" className='w-full' />
                    </figure> */}
                </div>
            </div>
        </section>
    )
}

export default Hero