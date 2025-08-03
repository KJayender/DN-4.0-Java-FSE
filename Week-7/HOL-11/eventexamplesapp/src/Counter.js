import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function sayHello() {
    console.log('Hello! Static message here.');
  }

  function incrementValue() {
    sayHello();
    setCount(count + 1);
  }

  function decrementValue() {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementValue}>Increment</button>
      <button onClick={decrementValue}>Decrement</button>
    </div>
  );
}

export default Counter;