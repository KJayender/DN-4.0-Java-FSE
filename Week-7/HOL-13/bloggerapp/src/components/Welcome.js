import React from 'react';

const Welcome = ({ name }) => {
  const welcomeMessage = name ? `Welcome, ${name}!` : 'Welcome, Guest!';
  return <h1>{welcomeMessage}</h1>;
};

export default Welcome;