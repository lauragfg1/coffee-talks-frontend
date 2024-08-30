// In Home.js
import './Home.css';
import React, { useEffect, useState } from "react";
import Button from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import SelectLevel from "../selectLevel/SelectLevel";
import LanguageList from "../languageList/LanguageList";
import { useNavigate } from 'react-router-dom';
import BlueButton from "../blueButton/BlueButton";
import StaticBackground from "../staticBackground/StaticBackground";

function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:8080/user/getAuthUser', {
                    method: 'GET',
                    credentials: 'include',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch user');
                }
                const userData = await response.json();
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        };

        fetchUser();
    }, []);

    const handleClick = () => {
        navigate('/new-meeting');
    }

    const handleClick2 = () => {
        navigate('/talks');
    }

    return (
        <div className="Home">
            <StaticBackground/>
            <div className="headerSection">
                <h1> {user ? user.name : 'Guest'},</h1>
                <h1>Ready for a new talk?</h1>
                <Button onClick={handleClick}>New Coffee Talk</Button>
                <BlueButton onClick={handleClick2}>Check your Talks</BlueButton>
            </div>

            <div className="formSection">
                <div className="participationSection">
                    <p>I want to participate in Coffee Talks</p>
                    {user && <ToggleButton initialParticipation={user.participation} />}
                </div>

                <SelectLevel/>
                <div className="languageSection">
                    <p>Which is your mother tongue?</p>
                    <LanguageList/>
                </div>
            </div>
        </div>
    );
}

export default Home;