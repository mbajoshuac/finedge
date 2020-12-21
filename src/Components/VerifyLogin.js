import React from 'react';
import "./VerifyLogin.css";
import phone from "../assets/iPhone.png";
import NavBar from "./NavBarLogin";

function VerifyLogin() {
    return (
        <>
            <NavBar/>
            <section className="verify-login">
                <h1> Sign in to <span>FinanceEdge</span> </h1>
                <div className="verify-login-card card">
                    <h2>2 step verification</h2>
                    <p className="verify-text">Enter the verification code <br/> generated by your phone <br/> ending in +xxx xxxxxxxx45.</p>

                    <div className="verify-login-code flex">
                        <img src={phone} alt="phone pic"/>
                        <div className="verify-login-password">
                            <p>Enter 2-step verification code</p>
                            <div>
                                <input type="password" placeholder="0 0 0 0 0 0"/>
                            
                                <button type="submit" className="verify-login-btn bttn">SIGN IN</button>
                            </div>
                        </div>
                    </div>

                    <div className="verify-login-checkbox">
                        <input type="checkbox"/><label> Don't ask me for the code again for 30 days when I use this computer.</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VerifyLogin;