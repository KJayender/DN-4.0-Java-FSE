import React from 'react';

const Login = ({ isLoggedIn, handleLoginToggle }) => {
  return (
    <div>
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Login;