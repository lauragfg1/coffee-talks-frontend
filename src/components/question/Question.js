import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import NextButton from "../nextButton/NextButton";
import BlueButton from "../blueButton/BlueButton";
import './Question.css';

function Question() {
    const location = useLocation();
    const { topic } = location.state || {};
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleClick = () => {
        navigate('/home');
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    }

    useEffect(() => {
        console.log('Fetching questions for topic:', topic);
        if (topic && topic.id) {
            fetch(`http://localhost:8080/question/getByTopic/${topic.id}`, {
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
                .then(data => setQuestions(data))
                .catch(error => console.error('Error fetching questions:', error));
        }
    }, [topic]);

    return (
        <div className="question-container">
            {topic && topic.german_name && <p className="large-text">{topic.german_name}</p>}
            {questions.length > 0 && (
                <div className="question-box">
                    <p className="question">{questions[currentQuestionIndex].question}</p>
                </div>
            )}

            <BlueButton onClick={handleClick} clasaName = "back-button">Finish</BlueButton>
            <NextButton onClick={handleNextQuestion} clasaName = "next-button"/>
        </div>
    );
}

export default Question;