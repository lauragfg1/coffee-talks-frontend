import React, { useState, useEffect } from 'react';

function TopicList({ selectedTopic, setSelectedTopic }) {
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

    const handleChange = (event) => {
        const topicId = event.target.value;
        console.log("Selected topic ID:", topicId);
        setSelectedTopic(topicId);
    };

    return (
        <select value={selectedTopic} onChange={handleChange}>
            <option value="">Select a topic</option>
            {topics.map(topic => (
                <option key={topic.id} value={topic.name}>
                    {topic.name}
                </option>
            ))}
        </select>
    );
}

export default TopicList;