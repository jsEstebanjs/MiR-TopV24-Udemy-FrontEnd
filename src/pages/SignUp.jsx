import React from "react";
import Nav from "../components/Nav/index";
import Footer from "../components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import FormRegisterAndLogin from "../components/FormRegisterAndLogin";

function SignUp() {

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_HEROKU_URL}/users` ,
        data,
      );
      localStorage.setItem("token", res.data.data.token);
      localStorage.setItem("email", res.data.data.email);
      localStorage.setItem("fullName", res.data.data.fullName);
      if (res.data.data.token) {
        navigate("/");
      }
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <Nav />
      <div className="signup">
        <div className="signup-container">
        <h2 className="signup__title">Sign up and start learning</h2>
          <FormRegisterAndLogin login={false} btn='Sign up' Submit={handleSubmit} />
          <div className="redirect-login__container">
            <span className="redirect-login">
              Already have an account?{" "}
              <Link to="/join/login">
                <strong>Log in</strong>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
