import Button from "../button/Button";
import BlueButton from "../blueButton/BlueButton";
import {useLocation, useNavigate} from "react-router-dom";

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
        <div>
            <h1>Thank you for scheduling a Coffee Talk!</h1>
            <Button onClick={handleClick2}>I want some inspiration</Button>
            <BlueButton onClick={handleClick}>I will check it later</BlueButton>
        </div>


    );
}

export default Confirmation;