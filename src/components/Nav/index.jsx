import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import logo from './../../images/logoNav.svg'
import {AiOutlineSearch , AiOutlineShoppingCart ,AiOutlineHeart} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdOutlineNotificationsNone , MdClose } from "react-icons/md";
import Options from './options';
import { useState} from 'react';
import Hamburguer from './Hamburguer';
import LanguageModal from '../LanguageModal';


function Nav({login}){
    const [isVisible,setIsvisible] = useState(false);
    const [searchMovil,setSearchMovil] = useState(false);
    const [mainHamburguer,setMainHamburguer] = useState(false);
    const [langModal, setLangModal] = useState(false);
    const navigate = useNavigate();

    document.addEventListener('click', function(event) {
        if(event.target.className === 'nav-close' || event.target.className === 'nav-opacity' ){
            setMainHamburguer(false);
            document.body.style = null;
        }
      });
      
      const navigateToCart = () => {
        navigate('/cart');
      }

      const navigateToLogin = () => {
        navigate('/join/login/');
      };

      const navigateToSingup = () => {
        navigate('/join/signup')
      }

      const navigateToHome = () => {
        navigate('/')
      }

      const handleLanguageModal = () => {
        setLangModal(langModal => !langModal);
      }

    return(
        <div className='main-nav'>
            {langModal?<LanguageModal handleLanguageModal={handleLanguageModal}/>:null}
            
            <div className='nav-btn-hamburguer-main' onClick={()=> {
                setMainHamburguer(true)
                document.body.style.overflow = "hidden"
                }}><FaBars /> {mainHamburguer ? <Hamburguer user={login} /> : null}
            </div>
            <div onClick={navigateToHome}><img src={logo} alt='logo-udemy' className='nav-logo-udemy'/></div>
            <nav className='nav-btn-categories'onMouseOver={()=> setIsvisible(true) } onMouseLeave={()=> setIsvisible(false)}>Categories {isVisible ? <Options/>  : null}</nav>
            <form className='nav-form'>
                <button type='button'><AiOutlineSearch /></button>
                <input type='search' placeholder='Search for anything'/>
            </form>
            <button className="nav-btn-tech">Teach on Udemy</button>
            <button className={login ?"nav-btn-learning":'displayNone'}>My learning</button>
            <button className={login ?"nav-btn-favorites" :'displayNone'}><AiOutlineHeart /></button>
            {searchMovil ? <div className='div-search-movil'>
                <form>
                    <button><AiOutlineSearch /></button>
                    <input type="search" placeholder='Search for anything'/>
                    <button type='button' onClick={()=>{
                        document.body.style = null;
                        setSearchMovil(false)
                    }}><MdClose/></button>
                </form>
            </div> : null}
            <button className='nav-btn-search-movil' onClick={()=>{
                document.body.style.overflow = "hidden";
                setSearchMovil(true)}}>
            <AiOutlineSearch /></button>
            <button className="nav-btn-shopping" onClick={navigateToCart}><AiOutlineShoppingCart /></button>
            <button className={login ?"nav-btn-notification" :'displayNone'}><MdOutlineNotificationsNone /></button>

            <div className={login ?'displayNone':'container-btns'}>
                <button className="nav-login" onClick={navigateToLogin}>Log in</button>
                <button className="nav-sing-up" onClick={navigateToSingup}>Sign up</button>
                <button className='nav-btn-languages' onClick={handleLanguageModal} ><BsGlobe /></button>
            </div>

            <div className={login ?'nav-user' :'displayNone'}>EC

            <div className='nav-options-user'>
            <span></span>
            <div className='nav-options'>
                <Link to="./"><p>My Cart</p></Link>
                <Link to="./"><p>Wishlist</p></Link>
                <Link to="./"><p>Messages</p></Link>
                <Link to="./"><p>Account Settings</p></Link>
                <Link to="./"><p>Payment Methods</p></Link>
                <Link to="./"><p>Purchas History</p></Link>
                <div className='nav-user-languages'>
                    <p>Language</p>
                </div>
                <Link to="./"><p>Log Out</p></Link>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Nav;
