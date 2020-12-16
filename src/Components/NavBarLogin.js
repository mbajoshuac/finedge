import React from 'react';
import logo from "../assets/logo.png";
import "./NavBarLogin.css";

function NavBarLogin() {
    return (
        <>
            <nav className="nav-login">
                <div className="container flex">
                    <div>
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div>
                        <button className="bttn bttn-outline">Log in</button>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default NavBarLogin;