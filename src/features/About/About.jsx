// styles
import './About.scss'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { client, urlFor } from '../../client'

function About() {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        const query = '*[_type == "skills"]'

        client.fetch(query)
            .then(data => setSkills(data))
    }, [])

    return (
        <div className="about">

            <h1 className="about__title title">
                About
            </h1>

            <section className="about__desc">

                <h3 className="about__subtitle f6">
                    Summary
                </h3>

                <p className="lg-text">
                    As a web developer, I enjoy bridging the gap between engineering and 
                    design — combining my technical knowledge with my keen eye for design 
                    to create a beautiful product. My goal is to always build applications 
                    that are scalable and efficient under the hood while providing engaging, 
                    pixel-perfect user experiences.
                </p>

            </section>

            <section className="about__skills">

                <h3 className="about__subtitle f6">
                    Skills
                </h3>

                <div className="about__img">

                    { skills.map(skill => (
                        <motion.img 
                            key={skill.name}
                            src={urlFor(skill.imgurl)}
                            alt="skill image" 
                            whileHover={{scale: [1, 1.25]}}
                            transition={{duration: 0.15}}
                        />
                    )) }

                </div>

            </section>

            <section className="about__education">

                <h3 className="about__subtitle f6">
                    Education
                </h3>

                <p className="lg-text">
                    Graduated from <b>Keshav Mahavidhlaya Delhi University</b> after completing 
                    Bachelor of Science in Computer Science
                </p>

            </section>

            <p className="about__cv lg-text">
                Looking for my <a>CV</a>?
            </p>

        </div>
    )
}

export default About