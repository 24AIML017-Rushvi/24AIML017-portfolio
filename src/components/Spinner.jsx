import React from 'react';

const Spinner = () => {
  return (
    <div className="spinner-container" id="spinner-loading">
      <div className="loading-spinner"></div>
      <p className="loading-text">Loading repositories...</p>
    </div>
  );
};

export default Spinner;
