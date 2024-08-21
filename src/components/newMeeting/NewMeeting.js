import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NextButton from "../nextButton/NextButton";
import './NewMeeting.css';
import TopicList from "../topicList/topicList";
import RandomUserButton from "../randomUserButton/RandomUserButton";
import AutocompleteUserInput from "../autocompleteUserInput/AutocompleteUserInput";
import RandomTopicButton from "../randomTopicButton/RandomTopicButton";

function NewMeeting() {
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedTopic, setSelectedTopic] = useState({});

    const handleClick = () => {
        if (selectedTopic && selectedTopic.id) {
            console.log("Selected Topic:", selectedTopic);
            console.log("Selected User:", selectedUser);
            navigate('/choose-date', { state: { topic: selectedTopic, user: selectedUser } });
        } else {
            console.error("No topic selected");
        }
    };

    return (
        <div className="new-meeting">
            <div className="form">
                <h1>Who do you want to have your Coffee Talk with?</h1>
                <div className="users">
                    <AutocompleteUserInput selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                    <RandomUserButton setSelectedUser={setSelectedUser} />
                </div>
                <h1>What would you like to talk about?</h1>
                <div className="topic">
                    <TopicList selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
                    <RandomTopicButton setSelectedTopic={setSelectedTopic} />
                </div>
            </div>
            <div className="next">
                <NextButton onClick={handleClick} />
            </div>
        </div>
    );
}

export default NewMeeting;