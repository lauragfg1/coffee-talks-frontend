// frontend/src/components/chooseDate/ChooseDate.js
import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import NextButton from "../nextButton/NextButton";
import './ChooseDate.css';
import Calendar from "../calendar/Calendar";
import Schedule from "../schedule/Schedule";

function ChooseDate() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const location = useLocation();
    const { topic } = location.state || {};
    const navigate = useNavigate();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleClick = () => {
        navigate('/confirm', { state: { date: selectedDate?.toString(), time: selectedTime, topic: topic } });
    };

    return (
        <div className="calendarwrapper">
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