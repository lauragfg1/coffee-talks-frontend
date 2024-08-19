import './Login.css';
import React from "react";
import Button from "../button/Button";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }


    return (
        <div className="Login">
            <h1>Welcome!</h1>
            <p>In order to continue, you will need to log in using your Endava Account</p>
            <Button onClick={handleClick}>Log in</Button>
        </div>
    );
}

export default Login;