import React from 'react';
import Button from "../button/Button";

function RandomTopicButton({ setSelectedTopic }) {
    const handleRandomTopic = () => {
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
            .then(data => {
                const randomTopic = data[Math.floor(Math.random() * data.length)];
                setSelectedTopic(randomTopic);
            })
            .catch(error => console.error('Error fetching topics:', error));
    };

    return (
        <Button onClick={handleRandomTopic}>Random</Button>
    );
}

export default RandomTopicButton;