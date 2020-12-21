import React from 'react';
import '../../index.css'
import "../../Components/CreateAccount.css";
import './AuthCode.css'


function AuthCode() {
    return (
        <>
            <h1 style={{textAlign: 'center', color: '#0062ff'}}>Finance Edge</h1> 
            <section className="create-account">
            <h2 style={{textAlign: 'center', marginTop:'20px'}}>Enter Authentication Code</h2>
                <div className="account-form card">
                    <div id="auth-section">
                        <form>

                        <p>Please enter the seven digit code we just sent to your xxxxxxxxx45</p>
                        <br /><br />
                        <div id="form-message">
                            <div><i className="fas fa-comment-dots"></i></div>
                            <div><input type="text" id="form-input" placeholder="0 0 0 0 0 0" style={{textAlign: 'center'}}/></div>
                            
                        </div>
                        <br/><br/>
                            <p>Send Message</p>
                            <p><a href="#">Use Another Phone Number</a></p><br/>
                        <div className="form-control">
                            <button type="submit" className="bttn">Submit</button>
                        </div>
                    </form>
                    </div>
                    
                    
                </div>
            </section>
        </>
    )
}

export default AuthCode;

