import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import ChooseDate from './components/chooseDate/ChooseDate';
import ConfirmTalk from './components/confirmTalk/ConfirmTalk';
import NewMeeting from "./components/newMeeting/NewMeeting";
import Talks from "./components/talks/Talks";
import Login from "./components/login/Login";
import Confirmation from "./components/confirmation/Confirmation";
import './App.css';

function App() {

    return (
        <Router>
            <div className="App">

                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/new-meeting" element={<NewMeeting />} />
                    <Route path="/choose-date" element={<ChooseDate />} />
                    <Route path="/confirm" element={<ConfirmTalk />} />
                    <Route path="/talks" element={<Talks />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;