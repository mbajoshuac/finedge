import {React} from 'react'
import "./SignIn.css";
import NavBar from "./NavBarLogin";

function SignIn() {
    return (
        <>
            <NavBar/>
            <section className="sign-in">
                <form>
                    <div>
                        <label> First Name </label>
                        <input type="text" name="name" id="input-name" />
                    </div>
                    <div>
                        <input/>
                    </div>
                    <div></div>
                </form>
            </section>    
        </>
    )
}

export default SignIn;