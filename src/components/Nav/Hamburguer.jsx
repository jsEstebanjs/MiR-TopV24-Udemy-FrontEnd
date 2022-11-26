import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
function Hamburguer({user , name,funcLogOut}){

    return(
        <div>
        <div className="nav-opacity">
        </div>
        <div className="nav-hamburguer">
            {user.email ? <div className="container-nav-user-hamburguer"><div className="nav-user-hamburguer">
                <div className="nav-user">
                {user.picture ?<img src={user.picture} alt='user' loading="lazy"/> :user.fullName.substring(0, 2).toUpperCase()}
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
               <Link to='./'><p>My learning</p></Link> 
               <Link to='/cart'><p>My Cart</p></Link> 
               <Link to='./'><p>Account Settings</p></Link> 
               <p onClick={funcLogOut}>Log Out</p>
            </div>
            </div>
            : <div className="register-nav-hamburguer">
                <Link to='/join/login'>Log in</Link> 
                <Link to='/join/signup'>Sign up</Link> 

                </div>}
        <div className="nav-hamburguer-categories">
            
        </div>
        
        </div>
        <div className="nav-close"><MdClose /></div>
        </div>
    )
}

export default Hamburguer;