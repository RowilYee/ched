import './Nav.css'
import chedLogo from '../../assets/ched-logo.png'
import Hamburger from 'hamburger-react'

const Nav = () => {
    return (
        <>
            <nav className="nav-container">
                <img className="logo" src={chedLogo} />
                <div className="search-container">
                    <input type="text" className="search-bar" />
                </div>
                <ul className='link-container'>
                    <li className="links"><a>Home</a></li>
                    <li className="links"><a>Programs</a></li>
                    <li className="links"><a>Sign In</a></li>
                    <li className="links"><a>Sign Up</a></li>
                    <Hamburger size={120} />
                </ul>

            </nav>
        </>
    )
}

export default Nav;