import React from 'react';

const CohortDetails = ({ name, status }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default CohortDetails;