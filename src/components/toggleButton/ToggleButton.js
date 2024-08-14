import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`toggle-button ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
            <div className="toggle-slider"></div>
        </div>
    );
}

export default ToggleButton;
