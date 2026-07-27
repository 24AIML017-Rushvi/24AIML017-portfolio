import React from 'react';

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container" id="error-api-failure">
      <div className="error-icon">⚠️</div>
      <h3 className="error-title">Error:</h3>
      <p className="error-message">{message || "An unexpected error occurred."}</p>
      {onRetry && (
        <button className="btn-retry" onClick={onRetry} id="btn-retry-fetch">
          Retry Button 🔄
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
