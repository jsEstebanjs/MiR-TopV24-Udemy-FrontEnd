import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
function Hamburguer({user , name}){

    return(
        <div>
        <div className="nav-opacity">
        </div>
        <div className="nav-hamburguer">
            {user ? <div className="container-nav-user-hamburguer"><div className="nav-user-hamburguer">
                <div className="nav-user">EC</div>
                <div className="info-user-nav">
                    {`Hi, ${name}`}
                    <p>Welcome back</p>
                </div>
            </div>
            <div className="nav-hamburguer-learnig">
               <Link to='./'><p>My learning</p></Link> 
               <Link to='./'><p>Settings</p></Link> 
            </div>
            </div>
            : <div className="register-nav-hamburguer">
                <p>Log in</p>
                <p>Sign up</p>
                </div>}
        <div className="nav-hamburguer-categories">
            
        </div>
        
        </div>
        <div className="nav-close"><MdClose /></div>
        </div>
    )
}

export default Hamburguer;