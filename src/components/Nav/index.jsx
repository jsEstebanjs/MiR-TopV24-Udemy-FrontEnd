import React from "react"; /* index de nav */
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../images/logoNav.svg";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineHeart,
} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineNotificationsNone, MdClose } from "react-icons/md";
import Options from "./options";
import { useState, useEffect } from "react";
import axios from "axios";
import Hamburguer from "./Hamburguer";
import LanguageModal from "../LanguageModal";
import IsTeacherModal from "./IsTeacheModel";
import { useSelector, useDispatch } from "react-redux";
import { SetUserInfo, ResetUserInfo } from "../../store/UserInfo.Slice";
import { useAuth0 } from "@auth0/auth0-react";


function Nav({ login, userAuth0 }) {
  const { isAuthenticated, logout } = useAuth0();
  const [isVisible, setIsvisible] = useState(false);
  const [searchMovil, setSearchMovil] = useState(false);
  const [mainHamburguer, setMainHamburguer] = useState(false);
  const [langModal, setLangModal] = useState(false);
  const [isTeacherModal, setIsTeacherModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.UserInfo);
  const itemShopCourses = useSelector((state)=> state.ShopCourses.itemShop)



  document.addEventListener("click", function (event) {
    if (
      event.target.className === "nav-close" ||
      event.target.className === "nav-opacity"
    ) {
      setMainHamburguer(false);
      document.body.style = null;
    }
  });

  useEffect(() => {
    (localStorage.getItem("token")
      ? axios.get(`${process.env.REACT_APP_HEROKU_URL}/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
          .then((res) => {
            console.log("Desde Nav Index -> res:", res);
            dispatch(SetUserInfo(res.data.data))
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {})
      : console.log("no hay token"))
  }, []);

  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToLogin = () => {
    navigate("/join/login/");
  };

  const navigateToSingup = () => {
    navigate("/join/signup");
  };

  const navigateToInstructorSignup = () => {
    navigate("/instructor/signup");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const handleLanguageModal = () => {
    setLangModal((langModal) => !langModal);
  };
  const handleIsTeacherModal = () => {
    setIsTeacherModal((isTeacherModal) => !isTeacherModal);
  };

  const handleNavigateMyCourses = () => {
    navigate("/home/my-courses/learning");
  }

  const handleLogOut = () => {
    localStorage.clear();
    if(isAuthenticated) logout();
    dispatch(ResetUserInfo());
    navigate("/");
  };

  const handleNavToCourses = () => {
    navigate("/home/my-courses/learning")
  }

  return (
    <div className="main-nav">
      {langModal
        ? <LanguageModal handleLanguageModal={handleLanguageModal} />
        : null}
      {isTeacherModal ? (
        <IsTeacherModal handleIsTeacherModal={handleIsTeacherModal} />
      ) : null}

      <div
        className="nav-btn-hamburguer-main"
        onClick={() => {
          setMainHamburguer(true);
          document.body.style.overflow = "hidden";
        }}
      >
        <FaBars /> {mainHamburguer ? <Hamburguer user={user.email} /> : null}
      </div>
      <div onClick={navigateToHome}>
        <img src={logo} alt="logo-udemy" className="nav-logo-udemy" />
      </div>
      <nav
        className="nav-btn-categories"
        onMouseOver={() => setIsvisible(true)}
        onMouseLeave={() => setIsvisible(false)}
      >
        Categories {isVisible ? <Options /> : null}
      </nav>
      <form className="nav-form">
        <button type="button">
          <AiOutlineSearch />
        </button>
        <input type="search" placeholder="Search for anything" />
      </form>
      {user.isInstructor ? (
        <button className="nav-btn-instructor" onClick={handleNavToCourses}>Instructor</button>
      ) : (
        <button
          className="nav-btn-tech"
          onClick={
            user.email ? () => setIsTeacherModal(true) : navigateToInstructorSignup
          }
        >
          Teach on Udemy
        </button>
      )}
      <button
        onClick={handleNavigateMyCourses} className={user.email ? "nav-btn-learning" : "displayNone" }>
        My learning
      </button>
      <button className={user.email? "nav-btn-favorites" : "displayNone"}>
        <AiOutlineHeart />
      </button>
      {searchMovil ? (
        <div className="div-search-movil">
          <form>
            <button>
              <AiOutlineSearch />
            </button>
            <input type="search" placeholder="Search for anything" />
            <button
              type="button"
              onClick={() => {
                document.body.style = null;
                setSearchMovil(false);
              }}
            >
              <MdClose />
            </button>
          </form>
        </div>
      ) : null}
      <button
        className="nav-btn-search-movil"
        onClick={() => {
          document.body.style.overflow = "hidden";
          setSearchMovil(true);
        }}
      >
        <AiOutlineSearch />
      </button>
      <button className="nav-btn-shopping" onClick={navigateToCart}>
        <span className="nav-btn-shopping-num">{itemShopCourses.length}</span>
        <AiOutlineShoppingCart />
      </button>
      <button className={user.email? "nav-btn-notification" : "displayNone"}>
        <MdOutlineNotificationsNone />
      </button>

      <div className={user.email ? "displayNone" : "container-btns"}>
        <button className="nav-login" onClick={navigateToLogin}>
          Log in
        </button>
        <button className="nav-sing-up" onClick={navigateToSingup}>
          Sign up
        </button>
        <button className="nav-btn-languages" onClick={handleLanguageModal}>
          <BsGlobe />
        </button>
      </div>

      <div className={login ? "nav-user" : "displayNone"}>
        {!isAuthenticated?'EC':<img src={user.picture} alt='user' loading="lazy"/>}
        <div className="nav-options-user">
          <span></span>
          <div className="nav-options">
            <Link to="./">
              <p>My Cart</p>
            </Link>
            <Link to="./">
              <p>Wishlist</p>
            </Link>
            <Link to="./">
              <p>Messages</p>
            </Link>
            <Link to="./">
              <p>Account Settings</p>
            </Link>
            <Link to="./">
              <p>Payment Methods</p>
            </Link>
            <Link to="./">
              <p>Purchase History</p>
            </Link>
            <div className="nav-user-languages">
              <p>Language</p>
            </div>
            <button className="log-out" onClick={handleLogOut}>
              Log Out
            </button>
            {/*<Link to="./"><p>Log Out</p></Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
