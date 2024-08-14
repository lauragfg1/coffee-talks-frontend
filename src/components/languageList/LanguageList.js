import React, { useState, useEffect } from 'react';

function LanguageList() {
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/language/getAll", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') // Ensure the token is included if required
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setLanguages(data))
            .catch(error => console.error('Error fetching languages:', error));
    }, []);

    return (
        <select>
            {languages.map(language => (
                <option key={language.id} value={language.id}>{language.name}</option>
            ))}
        </select>
    );
}

export default LanguageList;