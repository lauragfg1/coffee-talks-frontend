import React from 'react';
import './NextButton.css';

function NextButton({ onClick}) {
    return (
        <button className="nextButton" onClick={onClick}>
            Next
        </button>
    );
}

export default NextButton;
