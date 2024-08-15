import Button from "../button/Button";
import BlueButton from "../blueButton/BlueButton";
import {useNavigate} from "react-router-dom";

function Confirmation() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }
    return(
        <div>
            <h1>Thank you for scheduling a Coffee Talk!</h1>
            <Button>I want some inspiration</Button>
            <BlueButton onClick={handleClick}>I will check it later</BlueButton>
        </div>


    );
}

export default Confirmation;