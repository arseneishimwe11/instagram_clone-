import React, { Component } from 'react'
import Instapic from '../images/instagram1.png'
import SignupButton from './signup/signUpbutton'
import Footer from './signup/footer'
import Badge from './signup/badges'
import '../App.css'

class Signup extends Component {
    render() { 
        return (
            <div className='signup'>
                <img src={Instapic} alt="insta" className='instapic'/>
                <div className='signup-content'>
                        <p className='signup-status'>Sign up to see photos and videos from your friends.</p>
                        <SignupButton/>
                        <p className='or'>OR</p>
                        <div>
                            <form action=''>
                                <div className='input-wrapper'>
                                    <label htmlFor='email'>
                                        <input type='email' placeholder='Mobile Number or Email'/>
                                    </label>
                                </div>
                                <div className='input-wrapper'>    
                                    <label htmlFor='FullNames' >
                                        <input type='text' placeholder='Full Name'/>
                                    </label>
                                </div>
                                <div className='input-wrapper'>
                                    <label htmlFor='usenname'>
                                        <input type='text' placeholder='Username'/>
                                    </label>
                                </div>
                                <div className='input-wrapper'>
                                    <label htmlFor='password'>
                                        <input type='password' placeholder='Password'/>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className='signup-descriptions'>
                        <span>
                            <p>People who use our service may have uploaded your contact information to Instagram.<a href='https://web.facebook.com/help/instagram/261704639352628?_rdc=1&_rdr' target='blank'> Learn More</a></p>
                        </span>
                        <span>
                            <p>By signing up, you agree to our <a href='https://help.instagram.com/581066165581870/?locale=en_US' target='blank'>Terms</a> , <a href='https://free.facebook.com/privacy/policy/#' target='blank'>Privacy</a> <a href='https://free.facebook.com/privacy/policy/#' target='blank'>Policy</a> and <a href='https://help.instagram.com/1896641480634370/' target='blank'>Cookies Policy.</a></p>
                        </span>
                        </div>
                        <button id="signup-button">Sign up</button>
                </div>
                <div className='have-an-account'>
                <span>Have an account? <a href="./Login">Log in</a></span>
                </div>
                <Badge />
                <Footer/>
            </div>
        );
    }
}
 
export default Signup;

