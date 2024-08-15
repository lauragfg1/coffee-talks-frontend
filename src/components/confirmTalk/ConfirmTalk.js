
import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmTalk.css';
import calendarImage from '/Users/lferandez/Desktop/germanTalks/frontend/src/calendar-days-solid.svg';
import commentImage from '/Users/lferandez/Desktop/germanTalks/frontend/src/comment-solid.svg';
import userImage from '/Users/lferandez/Desktop/germanTalks/frontend/src/user-solid.svg';
import Button from "../button/Button";



function ConfirmTalk() {
    const location = useLocation();
    const { date, time, topic } = location.state || {};
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/confirmation');
    };

    return (
        <div className="confirm-wrapper">
            <h1>Confirm Your Coffee Talk</h1>

            <div className="content">

                <div className="user">
                    <img src={userImage} alt="User Icon" className="small-icon"/>
                    <p>Your conversation partner is</p>
                </div>

                <div className="time">
                    <img src={calendarImage} alt="Calendar Icon" className="small-icon"/>
                    <div className="date">
                        {date && <p> {new Date(date).toLocaleDateString()}</p>}
                        {time && <p>{time}h</p>}
                    </div>
                </div>

                <div className="topic">
                    <img src={commentImage} alt="User Icon" className="small-icon"/>
                    <div className="conversation">
                        <p>Your conversation will be about </p>
                        {topic && <p className="large-text">{topic}</p>}
                    </div>
                </div>

            </div>
            <div className="small-button">
                <Button onClick={handleClick}>Send Invitation</Button>
            </div>
        </div>
    );
}

export default ConfirmTalk;