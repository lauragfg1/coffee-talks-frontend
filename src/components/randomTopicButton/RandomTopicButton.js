import React, { useState, useEffect } from 'react';
import Button from '../button/Button';

function RandomTopicButton({ setSelectedTopic }) {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/topic/getAll", {
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
            .then(data => setTopics(data))
            .catch(error => console.error('Error fetching topics:', error));
    }, []);

    const handleRandom = () => {
        if (topics.length > 0) {
            const randomTopic = topics[Math.floor(Math.random() * topics.length)];
            setSelectedTopic(randomTopic.name);
            console.log("Selected Topic:", randomTopic.name);
        }
    };

    return (
        <Button onClick={handleRandom}>Random</Button>
    );
}

export default RandomTopicButton;