import React, { useState, useEffect } from 'react';

function LanguageList() {
    const [languages, setLanguages] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await fetch("http://localhost:8080/language/getAll", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setLanguages(data);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        const fetchInitialValues = async () => {
            try {
                const response = await fetch("http://localhost:8080/user/getInitialValues", {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token')
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setSelectedLanguage(data.motherTongueId);
            } catch (error) {
                console.error('Error fetching initial values:', error);
            }
        };

        fetchLanguages();
        fetchInitialValues();
    }, []);

    const handleChange = async (event) => {
        const newMotherTongueId = event.target.value;
        setSelectedLanguage(newMotherTongueId);

        try {
            const response = await fetch('http://localhost:8080/user/updateMotherTongue?motherTongue=' + newMotherTongueId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Failed to update mother tongue');
            }
        } catch (err) {
            setError('Error updating mother tongue');
        }
    };

    return (
        <div>
            <select value={selectedLanguage} onChange={handleChange}>
                <option value="">Select a language</option>
                {languages.map(language => (
                    <option key={language.id} value={language.id}>
                        {language.name}
                    </option>
                ))}
            </select>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default LanguageList;