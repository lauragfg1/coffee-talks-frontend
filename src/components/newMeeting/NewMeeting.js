import React, { useState } from "react";
import Button from "../button/Button";
import { useNavigate } from 'react-router-dom';
import NextButton from "../nextButton/NextButton";
import './NewMeeting.css';
import TopicList from "../topicList/topicList";

function NewMeeting() {
    const navigate = useNavigate();
    const [selectedTopic, setSelectedTopic] = useState(''); // Start as an empty string

    const handleClick = () => {
        if (selectedTopic) {
            console.log("Selected Topic:", selectedTopic);
            navigate('/choose-date', { state: { topic: selectedTopic } });
        } else {
            console.error("No topic selected");
        }
    };

    return (
        <div className="new-meeting">
            <div className="form">
                <h1>Who do you want to have your Coffee Talk with?</h1>

                <Button>Random</Button>
                <h1>What would you like to talk about?</h1>
                <div className="topic">
                    <TopicList selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
                    <Button>Random</Button>
                </div>
            </div>
            <div className="next">
                <NextButton onClick={handleClick} />
            </div>
        </div>
    );
}

export default NewMeeting;