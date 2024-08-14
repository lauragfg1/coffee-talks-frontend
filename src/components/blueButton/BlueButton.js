import React from 'react';
import './BlueButton.css';

function BlueButton({ onClick, children }) {
    return (
        <button className="BlueButton" onClick={onClick}>
            {children}
        </button>
    );
}

export default BlueButton;
