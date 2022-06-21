// styles
import './Header.scss'

// components
import Navigation from './Nav'

// icons
import { RiMoonFill, RiSunFill, RiCloseFill } from 'react-icons/ri'
import { GrDocumentDownload } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'

// images
import { images } from '../../constants'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header(props) {

    const [menuDisplay, setMenuDisplay] = useState(false)

    // opens/closes hamburger menu
    const toggleMenu = () => {
        setMenuDisplay(prev => !prev)
    }

    return (
        <header className="header">

            <div className={`menu f5 ${menuDisplay?'menu-open':'menu-close'} `}>

                <div 
                    className="menu__btnContainer" 
                    onClick={toggleMenu}
                >
                    <span className="menu__btn"></span>
                </div>

                {/* { menuDisplay && */}
                    <div className="menu__content">

                        <Navigation onClick={toggleMenu} />

                        <div className="content__socials">

                            <img src={images.github} alt="github img" />

                            <img src={images.linkedin} alt="linkedin img" /> 

                        </div>

                    </div>
                {/* } */}
            
            </div>

            <Link 
                to="/"
                className="header__logo logo"
            >

                &lt;HT/&gt;
            
            </Link>

            <nav className="header__nav sm-text">
            
                <Navigation/>
            
            </nav>

            <div 
                className="header__btns"
                onClick={() => props.toggleTheme()}
            >
            
                {props.theme=='light'
                    ? <RiMoonFill/>
                    : <RiSunFill/>
                }
            
            </div>

        </header>
    )
}

export default Header