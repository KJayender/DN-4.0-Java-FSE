import React from 'react';

function SyntheticEvent() {
  function handleClick(e) {
    console.log(e); // Synthetic event object
    alert("I was clicked");
  }

  return (
    <button onClick={handleClick}>OnPress</button>
  );
}

export default SyntheticEvent;