import React from 'react';
import FlightDetails from './FlightDetails';

const UserPage = () => {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <FlightDetails />
      <p>You can now book tickets.</p>
    </div>
  );
};

export default UserPage;