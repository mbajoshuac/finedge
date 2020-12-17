import {React} from 'react'
import "./SignIn.css";
import NavBar from "./NavBarLogin";

function SignIn() {
    return (
        <>
            <NavBar/>
            <section className="sign-in">
                <div>
                    <form>
                        <div>
                            <input type="text" name="name" placeholder="First Name"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Choose password"/>
                        </div>
                        <div>
                            <input type="checkbox"/><label> Keep me signed in on this device.</label>
                            <button type="submit" className="bttn">Login</button>
                        </div>
                    </form>

                    <p>Forgot password? Dont have an account Privacy Polocy <br/> Have an issue with 2 factor authentication </p>
                </div>
            </section>    
        </>
    )
}

export default SignIn;