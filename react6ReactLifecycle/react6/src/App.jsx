import { useState } from 'react';
import Counter from "./Counter"
import DerivedState from "./DrivedState"
import ComponentDidMount from './ComponentDidMount';
import ScrollTracker from './ScrollTracker';
import Timer from './Timer';

function App() {
  const [text, setText] = useState('Hello World!');


  const handleChangeText = () => {
    setText("I'm Learing React!");
  };

  return (
    <>
      <Counter />
      <br /><br /><br /><br />
      <div>
        <h1>App Bileşeni</h1>
        <button onClick={handleChangeText}>Change Text</button>
        <DerivedState text={text} />
      </div>
      <br /><br /><br /><br />
      <Timer />
      <br /><br /><br /><br />
      <ComponentDidMount />
      <br /><br /><br /><br />
      <ScrollTracker />
    </>
  )
}

export default App;
