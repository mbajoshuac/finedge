import React from 'react'
import './verify.css'
import '../../index.css'


function VerifyEmail() {
    return (
        <>
        <div className="container">
            <div className="main">
                <h3>Verify Your Email</h3>
                    <div className="card">
                        
                        <div clasName= "icon">
                            <i className="fa fa-plane"></i>
                        </div>
                        <p>We sent a verification email to markhudges@gmail.com Click the link inside to get started!</p>
                        <hr/>
                    <div>
                        <a href="#">Login</a>
                    </div>  
                    </div> 
                    
            </div>
             
        </div>

        </>
    )
}

export default VerifyEmail
