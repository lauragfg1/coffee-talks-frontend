import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = ({ onDateChange }) => {
    const [date, setDate] = useState(new Date());
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const [currMonth, setCurrMonth] = useState(date.getMonth());
    const [selectedDay, setSelectedDay] = useState(null);

    const months = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    const renderCalendar = () => {
        const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
        const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
        const lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
        const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

        const days = [];

        for (let i = firstDayofMonth; i > 0; i--) {
            days.push(
                <li className="inactive" key={`prev-${i}`}>
                    {lastDateofLastMonth - i + 1}
                </li>
            );
        }

        for (let i = 1; i <= lastDateofMonth; i++) {
            const currentDate = new Date(currYear, currMonth, i);
            const isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
            const isSelected = i === selectedDay ? "selected" : "";
            const isInactive = currentDate < new Date() ? "inactive" : "";
            days.push(
                <li
                    className={`${isToday} ${isSelected} ${isInactive}`}
                    key={`curr-${i}`}
                    onClick={isInactive ? null : () => handleDayClick(i)}
                >
                    {i}
                </li>
            );
        }

        for (let i = 1; i <= 6 - lastDayofMonth; i++) {
            days.push(
                <li className="inactive" key={`next-${i}`}>
                    {i}
                </li>
            );
        }

        return { days, monthYear: `${months[currMonth]} ${currYear}` };
    };

    const { days, monthYear } = renderCalendar();

    const handlePrevNext = (direction) => {
        let newMonth = direction === 'prev' ? currMonth - 1 : currMonth + 1;

        if (newMonth < 0 || newMonth > 11) {
            let newDate = new Date(currYear, newMonth, new Date().getDate());
            setDate(newDate);
            setCurrYear(newDate.getFullYear());
            setCurrMonth(newDate.getMonth());
        } else {
            setDate(new Date());
            setCurrMonth(newMonth);
        }
    };

    const handleDayClick = (day) => {
        setSelectedDay(day);
        const selectedDate = new Date(currYear, currMonth, day);
        onDateChange(selectedDate);
    };

    useEffect(() => {
        renderCalendar();
    }, [currMonth, currYear, selectedDay]);

    return (
        <div className="wrapper">
            <header>
                <p className="current-date">{monthYear}</p>
                <div className="icons">
                    <span id="prev" className="material-symbols-rounded" onClick={() => handlePrevNext('prev')}>&lt;</span>
                    <span id="next" className="material-symbols-rounded" onClick={() => handlePrevNext('next')}>&gt;</span>
                </div>
            </header>
            <div className="calendar">
                <ul className="weeks">
                    <li>Sun</li>
                    <li>Mon</li>
                    <li>Tue</li>
                    <li>Wed</li>
                    <li>Thu</li>
                    <li>Fri</li>
                    <li>Sat</li>
                </ul>
                <ul className="days">{days}</ul>
            </div>
        </div>
    );
}

export default Calendar;