import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../images/logoNav.svg'
import {AiOutlineSearch , AiOutlineShoppingCart ,AiOutlineHeart} from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";


function Nav({login}){

    return(
        <div className='main-nav'>
            <Link to='./'><img src={logo} alt='logo-udemy' className='nav-logo-udemy'/></Link>
            <button className='nav-btn-categories'>Categories</button>
            <form className='nav-form'>
                <button><AiOutlineSearch /></button>
                <input type='search' placeholder='Search for anything'/>
            </form>
            <button className="nav-btn-tech">Teach on Udemy</button>
            <button className={login ?"nav-btn-learning":'displayNone'}>My learning</button>
            <button className={login ?"nav-btn-favorites" :'displayNone'}><AiOutlineHeart /></button>
            <button className="nav-btn-shopping"><AiOutlineShoppingCart /></button>
            <button className={login ?"nav-btn-notification" :'displayNone'}><MdOutlineNotificationsNone /></button>
            <div className={login ?'displayNone':'container-btns'}>
                <button className="nav-login">Log in</button>
                <button className="nav-sing-up">Sign up</button>
                <button className='nav-btn-languages'><BsGlobe /></button>
            </div>
            <button className={login ?'nav-user' :'displayNone'}>EC</button>
        </div>
    )
}

export default Nav;