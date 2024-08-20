import React, { useState, useEffect } from 'react';
import './AutocompleteUserInput.css';

function AutocompleteUserInput({ selectedUser, setSelectedUser }) {
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/user/getAll", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    useEffect(() => {
        if (selectedUser) {
            setInputValue(selectedUser);
        }
    }, [selectedUser]);

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setActiveSuggestionIndex(0);
        if (value) {
            const filteredSuggestions = users.filter(user =>
                `${user.name} ${user.surname}`.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (user) => {
        setInputValue(`${user.name} ${user.surname}`);
        setSelectedUser(`${user.name} ${user.surname}`);
        setSuggestions([]);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            setActiveSuggestionIndex((prevIndex) =>
                Math.min(prevIndex + 1, suggestions.length - 1)
            );
        } else if (event.key === 'ArrowUp') {
            setActiveSuggestionIndex((prevIndex) =>
                Math.max(prevIndex - 1, 0)
            );
        } else if (event.key === 'Enter') {
            handleSelect(suggestions[activeSuggestionIndex]);
        }
    };

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Search users..."
            />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((user, index) => (
                        <li
                            key={user.id}
                            onClick={() => handleSelect(user)}
                            className={index === activeSuggestionIndex ? 'active' : ''}
                        >
                            {user.name} {user.surname}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default AutocompleteUserInput;