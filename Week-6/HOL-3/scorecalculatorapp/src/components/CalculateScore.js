import React from 'react';
import '../stylesheets/mystyle.css';

function CalculateScore({ name, school, total, goal }) {
  const average = total / goal;

  return (
    <div className="score-container">
      <h2>Student Score Summary</h2>
      <p><strong>Name:</strong> {}</p>
      <p><strong>School:</strong> {school}</p>
      <p><strong>Total Marks:</strong> {total}</p>
      <p><strong>Number of Subjects:</strong> {goal}</p>
      <p><strong>Average Score:</strong> {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;