// styles
import './Header.scss'

// icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()

    const goTo = () => {
        navigate('/')
    }

    return (
        <header className="header">

            <span 
                className="header__logo"
                onClick={goTo}
            >

                &lt;HT/&gt;
            
            </span>

            <nav className="header__nav">
            
                <ul>
            
                    <li>
                        <Link to='/'>home</Link>
                    </li>
            
                    <li>
                        <Link to='about'>about</Link>
                    </li>
            
                    <li>
                        <Link to='/work'>work</Link>
                    </li>
            
                    <li>
                        <Link to='contact'>contact</Link>
                    </li>
            
                </ul>
            
            </nav>

            <span className="header__themeBtn">
            
                <RiMoonFill/>
            
            </span>

        </header>
    )
}

export default Header