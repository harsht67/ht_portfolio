// styles
import './Home.scss'

// icons
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialAtCircular } from 'react-icons/ti'

function Home() {
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

            <section className="home__skills"></section>

            <section className="home__projects"></section>

            <section className="home__contact"></section>

        </div>
    )
}

export default Home