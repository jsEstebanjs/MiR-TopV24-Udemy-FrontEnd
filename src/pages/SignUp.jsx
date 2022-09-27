import React from "react";
import Nav from "../components/Nav/index"
import Footer from "../components/Footer";
import './SignUp.styles.css'

function SignUp() {
  const loginLink = <a href={('./login')}>log in</a>

/*   const handleSubmit = (e)=>{
    e.preventDefault();
    const {fullname, email, password } = form;
    console.log(form)
  } */
  return(
    <>
    <Nav />
      <div className="signup">
        <div className="signup-container">
          <h2 className="signup__title">Sign up and start learning</h2>
          <form className="signup__form"/* onSubmit={hangleSignup} */>
            <div className="form__container">
              <div className="form__square--item">
                <h4 className="formsignup__title">Full Name</h4>
                <input className="signup-imput signmup-imput-name"
                  area-invalid="false"
                  name="fullname"
                  minLength={2}
                  maxLength={64}
                  type="text"
                  required>
                </input>
              </div>
              <div className="form__square--item">
                <h5 className="formsignup__title">Email</h5>
                <input className="signup-imput signmup-imput-mail"
                  aria-invalid="false"
                  name="email"
                  minlength="7"
                  maxlength="64"
                  type="email"
                  value=""
                  required
                  >
                </input>
              </div>
              <div className="form__square--item">
                <h4 className="formsignup__title">Password</h4>
                <input className="signup-imput signmup-imput-mail"
                  aria-invalid="false"
                  minlength="6"
                  maxlength="64"
                  name="password"
                  required
                  type="password"
                  value="">
                </input>
              </div>
              <div className="signup-lines">- - - -</div>
              <div className="signup-aditional-info">
                <input type="checkbox" className="special-offers-checkbox"/>
                <p className="special-offers-text">Send me special offers, personalized recomendations,
                 and learning tips</p>
              </div>
            </div>
              <button type="button" className="singup-button">Sign up</button>
          </form>
          <hr />
          <div className="redirect-login__container">
            <span className="redirect-login">Already have an account?{loginLink}</span>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
};

export default SignUp;
