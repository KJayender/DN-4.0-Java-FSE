import React from 'react';

function SayWelcome() {
  function showMessage(message) {
    alert(message);
  }

  return (
    <button onClick={() => showMessage("Welcome!")}>
      Say Welcome
    </button>
  );
}

export default SayWelcome;