import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  function handleSubmit() {
    const euroValue = parseFloat(rupees) / 90; // Rough conversion
    setEuros(euroValue.toFixed(2));
  }

  return (
    <div>
      <h3>Rupees to Euros</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter INR"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euros && <p>Euro Value: €{euros}</p>}
    </div>
  );
}

export default CurrencyConverter;