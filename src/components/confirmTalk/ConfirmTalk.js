import React from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import './ConfirmTalk.css';
import NextButton from "../nextButton/NextButton";

function ConfirmTalk() {
    const location = useLocation();
    const { date, time, topic } = location.state || {};
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/confirmation');
    };

    return (
        <div className="confirm-wrapper">
            <div className="header">
                <h1>Confirm Your Coffee Talk</h1>
                {date && <p>Date: {new Date(date).toLocaleDateString()}</p>}
                {time && <p>Time: {time}</p>}
                {topic && <p>Topic: {topic}</p>}
            </div>
            <div className="next">
                <NextButton onClick={handleClick}/>
            </div>
        </div>
    );
}

export default ConfirmTalk;