import React, { useState } from "react";
import Nav from "../components/Nav/index"
import Footer from "../components/Footer";
import  axios from 'axios'
import './SignUp.styles.css'

function SignUp() {
  const loginLink = <a href={('./login')}>log in</a>

  const [student, setStudent] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [infoStudent, setInfoStudent] = useState(undefined)

  const handleChange = (e) => {
    const { value, name } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:8081/student", student);
      console.log(data.token)
      // localStorage.setItem("token", data.data.token)
      // localStorage.setItem("email", data.data.email)

      // const dataStudent = await axios.get("http://localhost:8080/",
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`
      //     }
      //   })
      // setInfoStudent({
      //   fullname: dataStudent.data.name,
      //   email: dataStudent.data.email,
      //   password: dataStudent.data.password
      // })

    } catch (err) {
      alert("error on signup" + err)
    }
  };

  return(
    <>
    <Nav />
      <div className="signup">
        <div className="signup-container">
          <h2 className="signup__title">Sign up and start learning</h2>
          <form className="signup__form" onSubmit={handleSubmit}>
            <div className="form__container">
              <div className="form__square--item">
                <label className="formsignup__title">Full Name</label>
                <input className="signup-imput signmup-imput-name"
                  type="text"
                  id="fullname"
                  name="fullname"
                  onChange={handleChange}
                  value={student.fullname}
                  required>
                </input>
              </div>
              <div className="form__square--item">
                <label className="formsignup__title">Email</label>
                <input className="signup-imput signmup-imput-mail"
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={student.email}
                  required
                  >
                </input>
              </div>
              <div className="form__square--item">
                <label className="formsignup__title">Password</label>
                <input className="signup-imput signmup-imput-mail"
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={student.password}
                  required>
                </input>
              </div>
              <div className="signup-lines">- - - -</div>
              <div className="signup-aditional-info">
                <input type="checkbox" className="special-offers-checkbox"/>
                <span className="special-offers-text">Send me special offers, personalized recomendations,
                 and learning tips</span>
              </div>
            </div>
              <button type="button" className="singup-button" onClick={handleSubmit}>Sign up</button>
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
