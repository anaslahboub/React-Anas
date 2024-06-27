import { useState } from 'react';
import './App.css';

function App(props) {
  const [counter, setCounter] = useState(15);

  function addValue() {
    setCounter(counter + 1);
  }

  function subtractValue() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {props.message} {counter}
        </h1>
        <p> If you want to build a new app or a
          new website fully with React, {counter}</p>
        <button onClick={addValue}>++</button>
        <button onClick={subtractValue}>--</button>
        <a href='/about'> go tpage about </a>

      </header>
    </div>
  );
}

export default App;
