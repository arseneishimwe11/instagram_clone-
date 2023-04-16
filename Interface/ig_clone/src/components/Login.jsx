import React, { Component } from 'react'
import SideImg from '../images/LOGIN2.png'
import Instapic from '../images/instagram1.png'
import LoginButton from './signup/signUpbutton'
import Badge from './signup/badges'
import SignupButton from './signup/signUpbutton'
import Footer from './signup/footer'
import '../App.css'

class Login extends Component {
    state = {  } 
    render() { 
        return (
            <div className='login'>
                <div>
                    <img src={SideImg} id="side-img"/>
                </div>
                <div className='side-right'>
                    <div className='sideImage'>
                        <img src={Instapic} className='insta-pic'/>
                    </div>
                    <div className='login-input'>
                        <form action=''>
                            <div>
                                <label htmlFor='email'>
                                    <input type='email' placeholder='Phone number, username or email'/>
                                </label>
                            </div>
                            <div>    
                                <label htmlFor='password' >
                                    <input type='text' placeholder='Password'/>
                                </label>
                            </div>
                            <div>
                                <input type='submit' value="Log in " id="login"/>
                            </div>
                        </form>
                    </div>
                    <p className='or'>OR</p>
                    <button id="log-with-facebook"><i class="uil uil-facebook"></i> Log in with Facebook</button>
                    <div className='forgot-password'>
                        <a href='https://www.instagram.com/accounts/password/reset/'>Forgot password?</a>
                    </div>
                    <div className='have-an-account'>
                        <span>Don't have an account? <a href="./Login"><span className='span-elt'>Sign up</span></a></span>
                    </div>
                    <Badge />
                    <div className='footer-class'>
                        <div className='footer'>
                            <a>Meta</a>
                            <a>About</a>
                            <a>Blog</a>
                            <a>Jobs</a>
                            <a>Help</a>
                            <a>API</a>
                            <a>Privacy</a>
                            <a>Terms</a>
                            <a>Top Accounts</a>
                            <a>Locations</a>
                            <a>Instagram Lite</a>
                            <a>Contact Uploading & Non-Users</a>
                            <a>Meta Verified</a>
                        </div>
                        <div className='copyright'>
                            <p>English</p>
                            <p>© 2023 Instagram from Meta</p>
                        </div>
                    </div>
                </div>  
            </div>
         );
    }
}
 
export default Login;

