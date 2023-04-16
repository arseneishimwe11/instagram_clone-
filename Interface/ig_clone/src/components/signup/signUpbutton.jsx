import React, { Component } from 'react'
import '../../App.css'
class SignupButton extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button id="sign-with-facebook"><i class="uil uil-facebook"></i> Log in with Facebook</button>
            </div>
        );
    }
}
 
export default SignupButton;