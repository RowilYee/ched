import chedLogo from '../../assets/ched-logo.png'
import './Home.css'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";

const Home = () => {
    return (
        <>
            <div className="content-container">
                <h1 className='header'>BIENVENIDOS!</h1>
                <p className='home-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sit provident ea, dicta eum odio laborum magnam qui sapiente, incidunt quo sequi possimus, delectus accusantium nemo et amet. Fuga, sint?</p>
            </div>
            <div className='footer-container'>
                <img className="logo" src={chedLogo} />
                <footer>
                    <div className="social-media-container">
                        <a><IoLogoInstagram /></a>
                        <a><IoLogoFacebook /></a>
                        <a><IoLogoTwitter /></a>
                    </div>
                    <p className='footer-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </footer>
            </div>
        </>
    )
}

export default Home