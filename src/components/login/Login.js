import './Login.css';
import React from "react";
import Button from "../button/Button";
import StaticBackground from "../staticBackground/StaticBackground";

function Login() {
    const handleClick = () => {
        window.location.href = "http://localhost:8080/user/loginAndRedirect";
    }

    return (
        <div className="Login">
            <StaticBackground/>
            <h1>Welcome!</h1>
            <p>In order to continue, you will need to log in using your Endava Account</p>
            <Button onClick={handleClick}>Log in</Button>
        </div>
    );
}

export default Login;
