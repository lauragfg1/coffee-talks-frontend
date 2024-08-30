import React, { useState, useEffect } from 'react';
import './ToggleButton.css';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInitialValues = async () => {
            try {
                const response = await fetch('http://localhost:8080/user/getInitialValues', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    credentials: 'include'
                });

                if (response.ok) {
                    const data = await response.json();
                    setIsOn(data.participation === 1);
                } else {
                    throw new Error('Failed to fetch initial values');
                }
            } catch (err) {
                setError('Error fetching initial values');
            }
        };

        fetchInitialValues();
    }, []);

    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:8080/user/updateParticipation?participation=' + (isOn ? 0 : 1), {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include'
            });

            if (response.ok) {
                setIsOn(!isOn);
            } else {
                throw new Error('Failed to update participation');
            }
        } catch (err) {
            setError('Error updating participation status');
        }
    };

    return (
        <div>
            <div
                className={`toggle-button ${isOn ? 'on' : 'off'}`}
                onClick={handleClick}
            >
                <div className="toggle-slider"></div>
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default ToggleButton;