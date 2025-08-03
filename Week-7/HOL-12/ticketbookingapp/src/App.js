import React, { useState } from 'react';
import Login from './components/Login';
import UserPage from './components/UserPage';
import GuestPage from './components/GuestPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  let pageToRender;
  if (isLoggedIn) {
    pageToRender = <UserPage />;
  } else {
    pageToRender = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>Ticket Booking App 🎟️</h1>
      <Login isLoggedIn={isLoggedIn} handleLoginToggle={handleLoginToggle} />
      {pageToRender}
    </div>
  );
}

export default App;