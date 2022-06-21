// styles
import './Header.scss'

// components
import Navigation from './Nav'

// icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import { GrDocumentDownload, GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'

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

            <div className="menu f5">
            
                <GiHamburgerMenu 
                    className="menu__btn" 
                    onClick={toggleMenu}
                />

                { menuDisplay &&
                    <div className="menu__content">

                        <GrClose 
                            className="content__btn"
                            onClick={toggleMenu}
                        />

                        <Navigation/>

                    </div>
                }
            
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