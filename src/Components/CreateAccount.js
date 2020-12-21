import React from 'react';
import NavBarLogin from "./NavBarLogin";
import "./CreateAccount.css";

function CreateAccount() {
    return (
        <>
            <NavBarLogin/>
            <section className="create-account">
                <h1>Create Your Account</h1>
                <div className="account-form card">
                    <form>
                        <div className="form-control flex">
                            <input type="text" placeholder="First Name" />
                            <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form-control">
                            <input type="password" placeholder="Choose password" />
                        </div>
                        <div className="form-control">
                            <input type="checkbox"/><label> I clerify that I am 13 years of age or older, and agree to the <span>User Agreement</span> and <span>Privacy Policy</span>.</label>
                        </div>
                        <div className="form-control">
                            <button type="submit" className="bttn">Sign Up</button>
                        </div>
                    </form>
                    <p>Already registered? or <span>Log in</span></p>
                </div>
            </section>
        </>
    )
}

export default CreateAccount;
