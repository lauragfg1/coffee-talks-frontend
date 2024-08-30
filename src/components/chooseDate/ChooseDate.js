import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NextButton from "../nextButton/NextButton";
import './ChooseDate.css';
import Calendar from "../calendar/Calendar";
import Schedule from "../schedule/Schedule";
import StaticBackground from "../staticBackground/StaticBackground";

function ChooseDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const location = useLocation();
    const { topic } = location.state || {};
    const { user } = location.state || {};
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleClick = () => {
        if (selectedDate && selectedTime && topic) {
            console.log("Passing topic to ConfirmTalk:", topic);
            navigate('/confirm', { state: { date: selectedDate?.toString(), time: selectedTime, topic, user} });
        } else {
            console.error("Date, time, or topic not selected");
        }
    };

    return (
        <div className="calendarwrapper">
            <StaticBackground/>
            <div className="header">
                <h1>When do you want to have your next Coffee Talk?</h1>
                <p>All talks will have a duration of 30 minutes.</p>
            </div>

            <div className="Calendar">
                <Calendar onDateChange={handleDateChange} />
                <Schedule onTimeChange={handleTimeChange} />
            </div>

            <div className="next">
                <NextButton onClick={handleClick} />
            </div>
        </div>
    );
}

export default ChooseDate;