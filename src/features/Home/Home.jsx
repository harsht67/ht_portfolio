// styles
import './Home.scss'

import { images } from '../../constants'
import { client } from '../../client'

import { useNavigate } from 'react-router'
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

    const goToWorks = () => {
        navigate('/work')
    }

    const goToWork = (name) => {
        navigate('/work/'+name)
    }

    return (
        <div className="home">

            <section className="home__msg">

                <h1>Harsh</h1>

                <h3>&gt; Web Developer</h3>

                <div>

                    <img src={images.github} alt="github image" />

                    <img src={images.linkedin} alt="linkedin image" />

                </div>

                <p> 
                    I love building beautiful interfaces, web apps, and everything in between!
                </p>

            </section>

            <section className="home__works">

                <h1 onClick={goToWorks}>
                    Previous work
                </h1>

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


            </section>

            <section className="home__contact">

                <h1>
                    Let's work together
                </h1>

                <p className="contact__email">
                    harsh@gmail.com
                </p>

                <button className="contact__btn">
                    Get in touch
                </button>


            </section>

        </div>
    )
}

export default Home