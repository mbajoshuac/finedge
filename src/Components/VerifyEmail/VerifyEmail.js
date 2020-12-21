import React from 'react'
import './verify.css'
import '../../index.css'


function VerifyEmail() {
    return (
        <>
            <div className="container">
                <div className="main">
                    <h1>Verify Your Email</h1>
                        <div className="card">
                        
                        <div clasName= "icon">
                            <i className="fa fa-paper-plane"></i>
                        </div>
                        <p>We sent a verification email to markhudges@gmail.com Click the link inside to get started!</p>
                        <hr/>
                    <div>
                        <a href="#" className="login-link">Login</a>
                    </div>  
                    </div> 
                    
            </div>
             
        </div>

        </>
    )
}

export default VerifyEmail
