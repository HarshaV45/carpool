import React from "react";
import { Link } from "react-router-dom";
import LoginComponent from "../../Components/loginComponent";
import "./login.css"
const logInForm = () => {
    return (
        <div className="logInPage flex">
            <div className="intro">
                <LoginComponent />
            </div>
            
            <div className="logInForm flex">
                <h1>Log In</h1>
                <input type="email" placeholder="Enter Email id"></input>
                <input type="password" placeholder="Enter Password"></input>
                <button type="submit" className="logInSubmit">Submit</button>
                <p>
                    Not a member yet?
                    <Link to="/signUp" className="signupLink">SIGN UP</Link>
                </p>
            </div>
           
        </div>
    );
};
export default logInForm;

