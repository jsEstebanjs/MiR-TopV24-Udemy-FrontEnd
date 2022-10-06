import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import Nav from "../../components/Nav/index"
import Footer from "../../components/Footer";
import image1 from '../../images/facebook.png';
import image2 from '../../images/buscar.png';
import image3 from '../../images/logotipo-de-apple.png';
import { FaEnvelope } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'


const FormularioLogIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }
    useEffect(() => {
        document.title = "Log In | Udemy";  
      }, []);

    return (
        <>
        <Nav />
        <div className="loginformAndButtons">
            <div className="head_loginbox">Log in to your Udemy account</div>
            <button className="fb-button">
                <img alt="" id="fblogo" src={image1}></img>
                <strong>Continue with Facebook</strong>
            </button>
            <button className="google-button">
                <img alt="" id="glogo" src={image2}></img>
                <strong>Continue with Google</strong>
            </button>
            <button className="apple-button">
             <img alt="" id="glogo" src={image3}></img>
                <strong>Continue with Apple</strong>
            </button>

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="email">
            <FaEnvelope />
            <input id="mail" type="email" placeholder="Email" {...register('email', {
                required: true,
                pattern:/[\w]+@{1}[\w]+\.[a-z]{2,3}/,
            })}  />
            {errors.email?.type === 'required' && <p>Rellene este campo</p>}
            </div>
            <div className="password">
            <HiLockClosed />
            <input id="pass" type="password" placeholder="Password" {...register('password', {
                required: true,
            })} />
            {errors.password?.type === 'required' && <p>Rellene este campo</p>}
            </div>
            <input className = "login-button" type="submit" value="Log In"></input>
            <div className="fp_na_ol_container">
            <div className="forgot_pass">or <Link to= '/join/forgot-password'>Forgot Password</Link></div>
            <div className="no_account">Don't have an account? <Link to='/join/signup'><strong>Sign up</strong></Link></div>
            <div className="organization_login"><Link to='/*'><strong>Log in with your organization</strong></Link></div>
            </div>
        </form>
        </div>
        <Footer />
        </>
    )
}

export default FormularioLogIn;