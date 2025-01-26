import React, { useState } from 'react';
import './App.css';

function App() {
  const [count , setCount] = useState(0);

  const Increment = () => {
    setCount(prev => prev+1);
  };
  const Decrement = () => {
    setCount(prev => prev - 1);
  };
  return (
    <div className="App">
      <h1><strong>Increment Decrement</strong></h1>

      <div>
        <button onClick={Increment}>Increment</button>
        <div>
          <p>{count}</p>
        </div>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
