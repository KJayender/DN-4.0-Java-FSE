// App.js
import React from 'react';
import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <h1>Student Score Summary</h1>
      <CalculateScore />
    </div>
  );
}

export default App;