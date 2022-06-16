// styles
import './Footer.scss'

// icons
import { BiCopyright } from 'react-icons/bi'

// images
import { images } from '../../constants'

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

                <img src={images.github} alt="mail img" />

                <img src={images.linkedin} alt="mail img" /> 

            </section>

        </footer>
    )
}

export default Footer