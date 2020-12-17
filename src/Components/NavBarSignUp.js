import React from 'react';
import logo from "../assets/logo.png";
import "./NavBarLogin.css";

function NavBarSignUp() {
    return (
        <>
            <nav className="nav-login">
                <div className="container flex">
                    <div>
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div>
                        <button className="bttn bttn-outline">Sign Up</button>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBarSignUp;