import './Nav.css'
import chedLogo from '../../assets/ched-logo.png'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <nav className="nav-container">
                <img className="logo" src={chedLogo} />
                <div className="search-container">
                    <input type="text" className="search-bar" />
                </div>
                <ul className='link-container'>
                    <li className="list"><Link className="links" to={"/"}>Home</Link></li>
                    <li className="list"><Link className="links" to={"/"}>Programs</Link></li>
                    <li className="list"><Link className="links" to={"/sign-in"}>Sign In</Link></li>
                    <li className="list"><Link className="links" to={"/"}>Sign Up</Link></li>
                    <Hamburger />
                </ul>

            </nav>
        </>
    )
}

export default Nav;