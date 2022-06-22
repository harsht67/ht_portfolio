// styles
import './Home.scss'

import { images } from '../../constants'
import { client } from '../../client'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// components
import Greeting from './Greeting'

function Home() {

    const [works, setWorks] = useState([])

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => setWorks(data))
    }, [])

    const navigate = useNavigate()

    const goToWork = (name) => {
        navigate('/work/'+name)
    }

    return (
        <div className="home">

            <section className="msg">
                
                <div className="msg__vertical f3">
                    web developer
                </div>

                <p className="msg__greeting f2">
                    {/* नमस्ते! */}
                    <Greeting/>
                </p>

                <p className="msg__name f1">
                    I'm Harsh
                </p>

                <div className="msg__socials">

                    <img src={images.github} alt="github image" />

                    <img src={images.linkedin} alt="linkedin image" />

                </div>

                <p className="msg__brief lg-text"> 
                    I love building beautiful interfaces, web apps, and everything in between!
                </p>

            </section>

            <section className="home__works">

                <h3 className="text">
                    <Link to="/work">
                        Previous work
                    </Link>
                </h3>

                <ul className="f2">

                    { works && 
                        works.map(work => (
                            <li 
                                key={work.name}
                                onClick={() => goToWork(work.name)}
                            >
                                {work.name}
                            </li>
                        ))
                    }

                </ul>

                <Link 
                    to="/work"
                    className="btn button text"
                >
                    All work
                </Link>

            </section>

            <section className="contact">

                <h3 className="f1">
                    Let's work together
                </h3>

                <p className="contact__email f6">
                    harsh@gmail.com
                </p>

                <Link 
                    to="/contact"
                    className="contact__btn button text"
                >
                    Get in touch
                </Link>


            </section>

        </div>
    )
}

export default Home