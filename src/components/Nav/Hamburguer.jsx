import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
function Hamburguer({
  user,
  name,
  funcLogOut,
  handler,
  handleNavToCourses,
  handleIsTeacherModal,
}) {
  return (
    <div>
      <div
        onClick={() => {
          handler(false);
        }}
        className="nav-opacity"
      ></div>
      <div className="nav-hamburguer">
        {user.email ? (
          <div className="container-nav-user-hamburguer">
            <div className="nav-user-hamburguer">
              <div className="nav-user">
                {user.picture ? (
                  <img src={user.picture} alt="user" loading="lazy" />
                ) : (
                  user.fullName.substring(0, 2).toUpperCase()
                )}
              </div>

              <div className="info-user-nav">
                <div className="container-info-user-nav-name">
                  <p>Hi, </p>
                  <p className="info-user-nav-name">{`${name}`}</p>
                </div>
                <p>Welcome back</p>
              </div>
            </div>
            <div className="nav-hamburguer-learnig">
              <Link
                onClick={() => {
                  handler(false);
                }}
                to="./"
              >
                <p>My learning</p>
              </Link>
              <Link
                onClick={() => {
                  handler(false);
                }}
                to="/cart"
              >
                <p>My Cart</p>
              </Link>
              {user.isInstructor ? (
                <p  onClick={handleNavToCourses}>
                  Instructor
                </p>
              ) : (
                <p
                  onClick={()=> {
                    handler(false);
                    handleIsTeacherModal()}
                }
                >
                  Teach on Udemy
                </p>
              )}
              <Link
                onClick={() => {
                  handler(false);
                }}
                to="./"
              >
                <p>Account Settings</p>
              </Link>
              <p onClick={funcLogOut}>Log Out</p>
            </div>
          </div>
        ) : (
          <div className="register-nav-hamburguer">
            <Link
              onClick={() => {
                handler(false);
              }}
              to="/join/login"
            >
              Log in
            </Link>
            <Link
              onClick={() => {
                handler(false);
              }}
              to="/join/signup"
            >
              Sign up
            </Link>
          </div>
        )}
        <div className="nav-hamburguer-categories"></div>
      </div>
      <div
        onClick={() => {
          handler(false);
        }}
        className="nav-close"
      >
        <MdClose />
      </div>
    </div>
  );
}

export default Hamburguer;
