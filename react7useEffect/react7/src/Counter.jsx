import { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count changed and Counter useEffect run! : ${count}`);
  }, [count]); // it will run just when count change !!!

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </div>
  );
}

export default Counter;