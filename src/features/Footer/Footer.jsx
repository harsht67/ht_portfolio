// styles
import './Footer.scss'

// icons
import { BiCopyright } from 'react-icons/bi'

// images
import { images } from '../../constants'

import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">

            <section className="footer__info">
                
                <Link 
                    to="/" 
                    className="footer__logo logo"
                >

                    &lt;HT/&gt;
                
                </Link>

                <div className="footer__copyright sm-text">
                
                    <BiCopyright/> 2022, Built &#38; designed by <br/> Harsh Tomar
                
                </div>

            </section>

            <section className="footer__socials">

                <img src={images.github} alt="github img" />

                <img src={images.linkedin} alt="linkedin img" /> 

            </section>

        </footer>
    )
}

export default Footer