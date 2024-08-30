import Button from "../button/Button";
import BlueButton from "../blueButton/BlueButton";
import {useLocation, useNavigate} from "react-router-dom";
import StaticBackground from "../staticBackground/StaticBackground";

function Confirmation() {

    const location = useLocation();
    const navigate = useNavigate();
    const { topic } = location.state || {};

    const handleClick = () => {
        navigate('/home');
    }

    const handleClick2 = () => {
        navigate('/question', { state: { topic } });
    }

    return(
        <div className="confirm-wrapper2">
            <StaticBackground/>
            <h1>Thank you for scheduling a Coffee Talk!</h1>
            <br/><br/><br/><br/>
            <div className="buttons">
               <Button onClick={handleClick2}>I want some inspiration</Button>
               <BlueButton onClick={handleClick}>I will check it later</BlueButton>
            </div>
        </div>


    );
}

export default Confirmation;