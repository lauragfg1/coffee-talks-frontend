import React, { useState } from 'react';
import './SelectLevel.css';

function SelectLevel() {
    const [selectedLevel, setSelectedLevel] = useState('fluent');

    const handleChange = (event) => {
        setSelectedLevel(event.target.value);
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
                        checked={selectedLevel === 'beginner'}
                        onChange={handleChange}
                    />
                    Beginner
                </label>
                <label>
                    <input
                        type="radio"
                        name="level"
                        value="intermediate"
                        checked={selectedLevel === 'intermediate'}
                        onChange={handleChange}
                    />
                    Intermediate
                </label>
                <label>
                    <input
                        type="radio"
                        name="level"
                        value="fluent"
                        checked={selectedLevel === 'fluent'}
                        onChange={handleChange}
                    />
                    Fluent
                </label>
            </form>
        </div>
    );
}

export default SelectLevel;
