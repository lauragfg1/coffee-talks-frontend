import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NextButton from "../nextButton/NextButton";
import BlueButton from "../blueButton/BlueButton";
import BackgroundVideo from "../backgroundVideo/BackgroundVideo";
import './Question.css';

function Question() {
    const location = useLocation();
    const { topic } = location.state || {};
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleClick = () => {
        navigate('/home');
    };

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    useEffect(() => {
        console.log('Fetching questions for topic:', topic);
        if (topic && topic.id) {
            fetch(`http://localhost:8080/question/getByTopic/${topic.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            })
                .then(response => response.json())
                .then(data => setQuestions(data))
                .catch(error => console.error('Error fetching questions:', error));
        }
    }, [topic])

    return (
        <div className="wrapper">
            <div className="question-container">
                {topic && <BackgroundVideo topicId={topic.id} />}

                {topic && topic.german_name && <p className="large-text">{topic.german_name}</p>}
                {topic && topic.german_name && <p className="large-en-text">{topic.name}</p>}
                {questions.length > 0 && (
                    <div className="question-box">
                        <p className="question">{questions[currentQuestionIndex].question}</p>
                        <p className="english">{questions[currentQuestionIndex].english}</p>
                    </div>
                )}

                <NextButton onClick={handleNextQuestion} className="next" />
            </div>
            <BlueButton onClick={handleClick} className="backdown2">Finish</BlueButton>
        </div>
    );
}

export default Question;
