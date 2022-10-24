import React, {useState} from 'react';
import Nav from "../components/Nav/index"
import Footer from "../components/Footer";
import  axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function InstructorSignup() {
  const [instructor, setInstructor] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInstructor({ ...instructor, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_HEROKU_URL}/instructors`, instructor)
        localStorage.setItem("token", res.data.info.token);
        localStorage.setItem("fullName", res.data.info.fullName);
        localStorage.setItem("email", res.data.info.email);
        if (res.data.info.token) {
          navigate("/join/login");
        }
    } catch (err) {
      console.log(`error on signup: ${err}`);
    }
  };
  return (
    <>
    <Nav />
      <div className="signup">
        <div className="signup-container">
          <h2 className="signup__title">Sign up and start teaching</h2>
          <form className="signup__form" onSubmit={handleSubmit}>
            <div className="form__container">
              <div className="form__square--item">
                <label className="formsignup__title"><strong>Full Name</strong></label>
                <input className="signup-imput signmup-imput-name"
                  type="text"
                  id="fullName"
                  name="fullName"
                  onChange={handleChange}
                  value={instructor.fullName}
                  required>
                </input>
              </div>
              <div className="form__square--item">
                <label className="formsignup__title"><strong>Email</strong></label>
                <input className="signup-imput signmup-imput-mail"
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={instructor.email}
                  required
                  >
                </input>
              </div>
              <div className="form__square--item">
                <label className="formsignup__title"><strong>Password</strong></label>
                <input className="signup-imput signmup-imput-mail"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={instructor.password}
                  required>
                </input>
              </div>
            </div>
              <button type="submit" className="singup-button" >Teacher Sign up</button>
          </form>
          <div className="redirect-login__container">
            <span className="redirect-login">Already have an account? <Link to='/join/login'><strong>Log in</strong></Link></span>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default InstructorSignup
