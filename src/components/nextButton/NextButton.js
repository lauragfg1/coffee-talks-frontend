import React from 'react';
import './NextButton.css';

function nextButton({ onClick}) {
    return (
        <button className="nextButton" onClick={onClick}>
            Next
        </button>
    );
}

export default nextButton;
