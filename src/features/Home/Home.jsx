// styles
import './Home.scss'

import { images } from '../../constants'
import { client } from '../../client'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

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

            <section className="home__msg">
                
                <div className="msg__vertical">
                        web developer
                </div>

                <p className="msg__greeting">
                    नमस्ते!
                </p>

                <p className="msg__name">
                    I'm Harsh
                </p>

                <div>

                    <img src={images.github} alt="github image" />

                    <img src={images.linkedin} alt="linkedin image" />

                </div>

                <p> 
                    I love building beautiful interfaces, web apps, and everything in between!
                </p>

            </section>

            <section className="home__works">

                <h3>
                    <Link to="/work">
                        Previous work
                    </Link>
                </h3>

                <ul>

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

                <button>
                    All work
                </button>


            </section>

            <section className="home__contact">

                <h3>
                    Let's work together
                </h3>

                <p className="contact__email">
                    harsh@gmail.com
                </p>

                <Link 
                    className="contact__btn"
                    to="/contact"
                >
                    Get in touch
                </Link>


            </section>

        </div>
    )
}

export default Home