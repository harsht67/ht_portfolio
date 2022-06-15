// styles
import './About.scss'

// icons
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoGithub } from 'react-icons/io5'
import { SiSass, SiMongodb } from 'react-icons/si'

function About() {
    return (
        <div className="about">

            <h1 className="about__title">
                Know about me 
            </h1>

            <section>

                <h3 className="about__subtitle">
                    Summary
                </h3>

                <p>
                    As a web developer, I enjoy bridging the gap between engineering and 
                    design — combining my technical knowledge with my keen eye for design 
                    to create a beautiful product. My goal is to always build applications 
                    that are scalable and efficient under the hood while providing engaging, 
                    pixel-perfect user experiences.
                </p>

            </section>

            <section className="about__skills">

                <h3 className="about__subtitle">
                    Skills
                </h3>

                <div className="skills__icons">
                    <IoLogoHtml5/>
                    <IoLogoCss3/>
                    <IoLogoJavascript/>
                    <IoLogoReact/>
                    <SiSass/>
                    <IoLogoGithub/>
                    <IoLogoNodejs/>
                    <SiMongodb/>
                </div>

            </section>

            <section className="about__education">

                <h3 className="about__subtitle">
                    Education
                </h3>

                <p>
                    Graduated from <b>Keshav Mahavidhlaya Delhi University</b> after completing 
                    Bachelor of Science in Computer Science
                </p>

            </section>

            <section></section>

        </div>
    )
}

export default About