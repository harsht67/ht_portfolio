// styles
import './Home.scss'

// icons
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialAtCircular } from 'react-icons/ti'

import { useNavigate } from 'react-router'

function Home() {

    const navigate = useNavigate()

    const goTo = () => {
        navigate('/work')
    }

    return (
        <div className="home">

            <section className="home__msg">

                <h1>Harsh</h1>

                <h3>&gt; Web Developer</h3>

                <div>

                    <TiSocialGithubCircular/>

                    <TiSocialLinkedinCircular/>

                    <TiSocialAtCircular/>

                </div>

                <p> 
                    I love building beautiful interfaces, web apps, and everything in between!
                </p>

            </section>

            <section className="home__projects">

                <h1 onClick={goTo}>
                    Projects
                </h1>

                <ul>

                    <li>Portfolio Website</li>

                    <li>Amazon Clone</li>

                    <li>Invoice App</li>

                    <li>Todo App</li>
                    
                    <li>Maps API</li>

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