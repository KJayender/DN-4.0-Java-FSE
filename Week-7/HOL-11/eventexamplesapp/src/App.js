import React from 'react';
import Counter from './Counter';
import SayWelcome from './SayWelcome';
import SyntheticEvent from './SyntheticEvent';
import CurrencyConverter from './CurrencyConverter';

function App() {
  return (
    <div>
      <h1>React Event Examples</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEvent />
      <CurrencyConverter/>
    </div>
  );
}

export default App;