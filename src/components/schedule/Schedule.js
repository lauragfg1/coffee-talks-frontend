import React, { useState, useEffect } from 'react';
import './Schedule.css';

function Schedule({ onTimeChange }) {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const hours = [];
        for (let i = 9; i < 21; i++) {
            hours.push(<option key={`${i}:00`} value={`${i}:00`}>{i}:00</option>);
            hours.push(<option key={`${i}:30`} value={`${i}:30`}>{i}:30</option>);
        }
        setOptions(hours);
    }, []);

    return (
        <div className="Schedule">
            <select onChange={onTimeChange}>
                {options}
            </select>
        </div>
    );
}

export default Schedule;