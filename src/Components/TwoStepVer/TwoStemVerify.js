import React from 'react';
import '../../index.css'
import './TwoStepVerify.css'
import "../../Components/CreateAccount.css";


function CreateAccount() {
    return (
        <>
            <h1 style={{textAlign: 'center', color: '#0062ff'}}>Finance Edge</h1> 
            <section className="create-account">
                
                <div className="account-form card">

                    <h2 style={{textAlign: 'center', marginTop:'20px'}}>Set up Two Step Verification</h2>
                    <form>
                        <div className="form-control">
                            <select id="form-input" >
                                <option value="country">Country *</option>
                            </select>
                        </div>
                        
                        <div className="form-control">
                        <label>Phone Number</label>
                        <input type="text" id="form-input" placeholder="+234"/>
                        </div>
                        
                        <p>Security is critical at FinanceEgde . To help keep your account safe, we’ll send a verification code sms when you sign in using a new device</p>
                        <div className="form-control">
                            <button type="submit" className="bttn">Sign Up</button>
                        </div>
                    </form>
                    
                </div>
            </section>
        </>
    )
}

export default CreateAccount;

