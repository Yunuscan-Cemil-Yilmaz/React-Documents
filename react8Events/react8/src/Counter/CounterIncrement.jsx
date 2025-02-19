import PropTypes from "prop-types";

const CounterIncrement = ({ increment, reset }) => {
    return (
        <>
            <button onClick={increment}>+1 Add</button>
            <button onClick={reset}>Reset</button>
        </>
    );
}

CounterIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired
}

export default CounterIncrement;