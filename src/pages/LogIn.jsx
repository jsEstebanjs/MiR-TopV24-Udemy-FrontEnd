import { useForm } from "react-hook-form";
import { useEffect } from "react";
import React from "react";
import Nav from "../components/Nav/index"
import Footer from "../components/Footer";
import './LogIn.styles.css';
import image1 from '../images/facebook.png';
import image2 from '../images/buscar.png';
import image3 from '../images/logotipo-de-apple.png';
import { FaEnvelope } from 'react-icons/fa'
import { HiLockClosed } from 'react-icons/hi'


const FormularioLogIn = () => {

    //este hook nos devuelve un objeto, dentro del objeto obtenemos la funcion register(nos permite registrar los diferentes campos del formulario), y
    //con el handleSubmit gestionamos el envío del datos, es la accion de submit propia del funcionario
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
            <div className="forgot_pass">or <a href="forgot-password">Forgot Password</a></div>
            <div className="no_account">Don't have an account? <a href="signup"><strong>Sign up</strong></a></div>
            <div className="organization_login"><a href="*"><strong>Log in with your organization</strong></a></div>
        </form>
        </div>
        <Footer />
        </>
    )
}

export default FormularioLogIn;
