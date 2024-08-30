import React, { useState, useEffect } from 'react';
import './SelectLevel.css';

function SelectLevel() {
    const [level, setLevel] = useState('');
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
                    setLevel(data.level);
                } else {
                    throw new Error('Failed to fetch initial values');
                }
            } catch (err) {
                setError('Error fetching initial values');
            }
        };

        fetchInitialValues();
    }, []);

    const handleChange = async (event) => {
        const newLevel = event.target.value;
        try {
            const response = await fetch('http://localhost:8080/user/updateLevel?level=' + newLevel, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                credentials: 'include'
            });

            if (response.ok) {
                setLevel(newLevel);
            } else {
                throw new Error('Failed to update level');
            }
        } catch (err) {
            setError('Error updating level');
        }
    };

    return (
        <div className="germanLevel">
            <p>What is your German level?</p>
            <form>
                <label>
                    <input
                        type="radio"
                        name="level"
                        value="beginner"
                        checked={level === 'beginner'}
                        onChange={handleChange}
                    />
                    Beginner
                </label>
                <label>
                    <input
                        type="radio"
                        name="level"
                        value="intermediate"
                        checked={level === 'intermediate'}
                        onChange={handleChange}
                    />
                    Intermediate
                </label>
                <label>
                    <input
                        type="radio"
                        name="level"
                        value="fluent"
                        checked={level === 'fluent'}
                        onChange={handleChange}
                    />
                    Fluent
                </label>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default SelectLevel;