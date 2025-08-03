import React from 'react';
import FlightDetails from './FlightDetails';

const GuestPage = () => {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <FlightDetails />
      <p>Login to book tickets.</p>
    </div>
  );
};

export default GuestPage;