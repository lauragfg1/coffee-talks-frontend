import './Home.css';
import React from "react";
import Button from "../button/Button";
import ToggleButton from "../toggleButton/ToggleButton";
import SelectLevel from "../selectLevel/SelectLevel";
import LanguageList from "../languageList/LanguageList";
import { useNavigate } from 'react-router-dom';
import BlueButton from "../blueButton/BlueButton";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/new-meeting');
    }

    const handleClick2 = () => {
        navigate('/talks');
    }


    return (
        <div className="Home">
                <div className="headerSection">
                    <h1>Ready for a new talk?</h1>
                    <Button onClick={handleClick}>New Coffee Talk</Button>
                    <BlueButton onClick={handleClick2}>Check your Talks</BlueButton>
                </div>

                <div className="formSection">
                    <div className="participationSection">
                        <p>I want to participate in Coffee Talks</p>
                        <ToggleButton/>
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