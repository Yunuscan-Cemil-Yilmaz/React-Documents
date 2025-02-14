import { useState } from "react";

const Counter = () => {
    // define :
    const [counter, setCounter] = useState(0);
    // first parameter is veriable
    // second is func for change veriable
    // 0 is default (init) value!


    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>Increase Counter</button>
        </>
    );
}

export default Counter;