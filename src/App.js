import React from 'react';
import { useState } from 'react';
import './App.css';





function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <button onClick={increment}> Click ME! </button>
      <h1>{count}</h1>

      <br />

    </>
  );
}

export default App;
