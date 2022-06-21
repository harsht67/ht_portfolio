import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <ul>
            
            <li>
                <Link to='/'>
                    home
                </Link>
            </li>
    
            <li>
                <Link to='about'>
                    about
                </Link>
            </li>
    
            <li>
                <Link to='/work'>
                    work
                </Link>
            </li>
    
            <li>
                <Link to='contact'>
                    contact
                </Link>
            </li>
    
        </ul>
    )
}

export default Navigation