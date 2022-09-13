import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './SignUp.styles.css'

function SignUp() {
/*   const handleSubmit = (e)=>{
    e.preventDefault();
    const {fullnam, email, password } = form;
  } */
  return(
    <>
    <Header />
      <div className="signup">
        <div className="signup-container">
          <h2 className="signup__title">Sign up and start learning</h2>
          <form className="marketplace-signup-form"/* onSubmit={hangleSignup} */>
            <div className="form-group">
              <div className="udlite-compact-form-control-container">
              <input className="udlite-compact-form-control-container" area-invalid="false" name="fullname" required minLength={2} maxLength={64} type="text"></input>
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
