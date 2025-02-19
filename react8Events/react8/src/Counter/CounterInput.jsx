import { useState } from "react";
import PropTypes from "prop-types";

const CounterInput = ({ counter, setCounter }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue !== "") {
            const newCounterValue = Number(inputValue);
            setCounter(newCounterValue); 
            setInputValue('');
        } else {
            alert("Please enter a number");
        }
    };

    return (
        <form onSubmit={handleSubmit}> 
            <input
                type="number"
                placeholder="enter a new counter value"
                value={inputValue} 
                onChange={handleInputChange}
            />
            <button type="submit">enter</button> 
        </form>
    );
};

CounterInput.propTypes = {
    counter: PropTypes.number.isRequired,
    setCounter: PropTypes.func.isRequired,
};

export default CounterInput;