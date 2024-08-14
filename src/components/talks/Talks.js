import React from "react";
import { useNavigate } from 'react-router-dom';
import NextButton from "../nextButton/NextButton";


function Talks() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/talks');
    }
    return (
        <div className="talks">

            <h1>Ckeck your talks</h1>

        </div>
    );
}

export default Talks;