import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import Home from "./components/home/Home";
import NewMeeting from "./components/newMeeting/NewMeeting";
import ChooseDate from "./components/chooseDate/ChooseDate";
import ConfirmTalk from "./components/confirmTalk/ConfirmTalk";
import Login from "./components/login/Login";
import Talks from "./components/talks/Talks";
import Confirmation from "./components/confirmation/Confirmation";

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