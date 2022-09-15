import { useForm } from "react-hook-form";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './LogIn.styles.css';
import '../images/facebook.png';
import '../images/buscar.png';
import '../images/logotipo-de-apple.png';


const FormularioLogIn = () => {
    
    //este hook nos devuelve un objeto, dentro del objeto obtenemos la funcion register(nos permite registrar los diferentes campos del formulario), y
    //con el handleSubmit gestionamos el envío del datos, es la accion de submit propia del funcionario
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
        <Header />
        <div className="loginformAndButtons">
            <div className="head_loginbox">Log in to your Udemy account</div>
            <button className="fb-button">
                <img alt="" id="fblogo" src="../images/facebook.png"></img>
                <strong>Continue with Facebook</strong>
            </button>
            <button className="google-button">
                <img alt="" id="glogo" src="../images/buscar.png"></img>
                <strong>Continue with Google</strong>
            </button>
            <button className="apple-button">
             <img alt="" id="glogo" src="../images/logotipo-de-apple.png"></img>
                <strong>Continue with Apple</strong>
            </button>

            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="email">
            <i className="fa-solid fa-envelope"></i>
            <input id="mail" type="email" placeholder="Email" {...register('email', {
                required: true,
                pattern:/[\w]+@{1}[\w]+\.[a-z]{2,3}/,
            })}  />
            {errors.email?.type === 'required' && <p>Rellene este campo</p>}
            </div>
            <div className="password">
            <i className="fa-solid fa-lock"></i>
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