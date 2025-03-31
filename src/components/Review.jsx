import React from 'react'
import ReviewCard from './ReviewCard';

import people1 from "../assets/people-1.jpg"
import people2 from "../assets/people-2.jpg"
import people3 from "../assets/people-3.jpg"
import people4 from "../assets/people-4.jpg"
import people5 from "../assets/people-5.jpg"
import people6 from "../assets/people-6.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(useGSAP, ScrollTrigger);

const Review = () => {

    useGSAP(() =>{
        gsap.to('.scrub-slide', {
            scrollTrigger : {
                trigger : '.scrub-slide',
                scrub : true,
                start : '-200% 80%'
            },
            x : '-1000'
        })
    });


    const reviews = [
        {
            content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
            name: 'Sophia Ramirez',
            imgSrc: people1,
            company: 'PixelForge'
        },
        {
            content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
            name: 'Ethan Caldwell',
            imgSrc: people2,
            company: 'NexaWave'
        },
        {
            content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
            name: 'Liam Bennett',
            imgSrc: people3,
            company: 'CodeCraft'
        },
        {
            content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
            name: 'Noah Williams',
            imgSrc: people4,
            company: 'BrightWeb'
        },
        {
            content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
            name: 'Ava Thompson',
            imgSrc: people5,
            company: 'TechMosaic'
        },
        {
            content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
            name: 'Jonathan',
            imgSrc: people6,
            company: 'Skyline Digital'
        }
    ];
    return (
        <section id="reviews" className="section overflow-hidden">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Whats our customer says
                </h2>

                <div className="flex items-stretch gap-3 w-fit scrub-slide">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            key={key}
                            name={name}
                            imgSrc={imgSrc}
                            content={content}
                            company={company}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review