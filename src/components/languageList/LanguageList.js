import React, { useState, useEffect } from 'react';

function LanguageList() {

    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');

    useEffect(() => {
        fetch("http://localhost:8080/language/getAll", {
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
            .then(data => setLanguages(data))
            .catch(error => console.error('Error fetching languages:', error));
    }, []);

    const handleChange = (event) => {
        console.log("Selected language ID:", event.target.value);
        setSelectedLanguage(event.target.value);
    };

    return (
        <select value={selectedLanguage} onChange={handleChange}>
            <option value="">Select a language</option>
            {languages.map(language => (
                <option key={language.id} value={language.id}>
                    {language.name}
                </option>
            ))}
        </select>
    );
}

export default LanguageList;