import {React} from 'react'
import "./SignIn.css";
import NavBar from "./NavBarSignUp";

function SignIn() {
    return (
        <>
            <NavBar/>
            <section className="sign-in">
                <div className="sign-in-card card">
                    <form>
                        <div>
                            <input type="text" name="name" placeholder="First Name"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Choose password"/>
                        </div>
                        <div className="flex login-div">
                            <div>
                                <input type="checkbox"/><label> Keep me signed in on this device.</label>
                            </div>
                            <button type="submit" className="bttn">Login</button>
                        </div>
                    </form>
                </div>

                <p className="sign-in-privacy">Forgot password? Dont have an account Privacy Polocy <br/> Have an issue with 2 factor authentication </p>
            </section>    
        </>
    )
}

export default SignIn;