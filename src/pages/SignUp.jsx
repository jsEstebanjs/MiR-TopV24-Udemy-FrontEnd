import React from "react";
import Nav from "../components/Nav/index"
import Footer from "../components/Footer";
import './SignUp.styles.css'

function SignUp() {
/*   const handleSubmit = (e)=>{
    e.preventDefault();
    const {fullnam, email, password } = form;
  } */
  return(
    <>
    <Nav />
      <div className="signup">
        <div className="signup-container">
          <h2 className="signup__title">Sign up and start learning</h2>
          <form className="signup__form"/* onSubmit={hangleSignup} */>
            <div className="form__square">
              <div className="form__square--item">
                <h4 className="formsignup__title">Full Name</h4>
                <input className="udlite-compact-form-control-container-1" area-invalid="false" name="fullname" required minLength={2} maxLength={64} type="text"></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    <Footer />
    </>
  )
};

export default SignUp;
