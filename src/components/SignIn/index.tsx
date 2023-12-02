import './SignIn.css'
import chedLogo from '../../assets/ched-logo.png'

const SignUp = () => {
    return (
        <>
            <div className="sign-up-container">
                <form className="form-container">
                    <div className='logo-container'>
                        <img src={chedLogo} />
                    </div>
                    <div className='form-header'>
                        <h1>Hello there!</h1>
                        <p>Welcome to your dashboard. Please Log in your account.</p>
                        <input className='login-input' placeholder='Email'></input>
                        <input className='login-input' placeholder='Password'></input>
                        <button className='login-btn'>Login</button>
                        <p>Don't have an account? <a className='signup-link'>Sign Up</a></p>
                    </div>

                </form>
            </div>
        </>
    )
}

export default SignUp