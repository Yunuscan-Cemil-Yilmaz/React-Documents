
import { useState } from "react";
import CounterIncrement from "./CounterIncrement";
import CounterInput from "./CounterInput";

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(counter + 1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

    return (
        <>
            <h2>Counter: { counter }</h2>
            <CounterIncrement increment={handleIncrement} reset={resetCounter}/>
            <CounterInput counter={counter} setCounter={setCounter}/>
        </>
    );
}

export default Counter;