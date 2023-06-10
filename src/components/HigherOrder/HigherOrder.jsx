import React, { useEffect } from 'react';
import {FaFacebook} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {BsLinkedin} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import "./HigherOrder.scss";

const HigherOrder = (Heading, headingText) => function Func() {

    useEffect(() => {

        const LoginContainer = async () => {
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');
            
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        }

        LoginContainer();
    }, []);


  return (
    <>
     <div className="login-container">

       {Heading && <Heading  headingText={headingText} /> }

        <section className='form-container mb-20'>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div class="social-container"> 
                            <a href="#" class="social fb-icon"> <FaFacebook style={{fontSize: 20}} /> </a>
                            <a href="#" class="social"> <FcGoogle style={{fontSize: 20}} /> </a>
                            <a href="#" class="social"> <BsLinkedin  style={{fontSize: 18}} /> </a>
                        </div>
                        <span>or use your email for registration</span>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="#">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            <a href="#" class="social"> <FaFacebook style={{fontSize: 20}} /> </a>
                            <a href="#" class="social"> <FcGoogle style={{fontSize: 20}} /> </a>
                            <a href="#" class="social"> <BsLinkedin  style={{fontSize: 18}} /> </a>
                        </div>
                        <span>or use your account</span>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button>Sign In</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

     </div>
    </>
  )
}

export default HigherOrder;