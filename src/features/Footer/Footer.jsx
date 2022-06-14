// styles
import './Footer.scss'

// icons
import { TiSocialGithubCircular, TiSocialLinkedinCircular, TiSocialAtCircular } from 'react-icons/ti'
import { BiCopyright } from 'react-icons/bi'

function Footer() {
    return (
        <footer className="footer">

            <section className="footer__info">
                
                <p>
                    Harsh <br/> Tomar
                </p>

                <p>
                    <BiCopyright/>2022, Built &#38; designed by <br/> Harsh Tomar
                </p>

            </section>

            <section className="footer__socials">

                <TiSocialGithubCircular/>

                <TiSocialLinkedinCircular/>

                <TiSocialAtCircular/>

            </section>

        </footer>
    )
}

export default Footer