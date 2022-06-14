// styles
import './Header.scss'

// icons
import { RiMoonFill, RiSunFill } from 'react-icons/ri'

function Header() {
    return (
        <header className="header">

            <span className="header__logo">

                &lt;h//t&gt;
            
            </span>

            <nav className="header__nav">
            
                <ul>
            
                    <li>home</li>
            
                    <li>about</li>
            
                    <li>projects</li>
            
                    <li>contact</li>
            
                </ul>
            
            </nav>

            <span className="header__themeBtn">
            
                <RiMoonFill/>
            
            </span>

        </header>
    )
}

export default Header