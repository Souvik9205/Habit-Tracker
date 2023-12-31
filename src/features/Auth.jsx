import React, { useState } from 'react';
import './features.css';

const Auth = ({ setName, setShowAuth }) => {
  const [inputName, setInputName] = useState('');

  const handleNameInput = (e) => {
    setInputName(e.target.value);
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
    setShowAuth(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && inputName) {
      handleNameSubmit(e);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        <form onSubmit={handleNameSubmit} className="auth-form">
          <h2>Happy new Year 2024!</h2>
          <input
            type="text"
            placeholder="Enter yur name..."
            value={inputName}
            onChange={handleNameInput}
          />
          {inputName && (
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-2xl">
                Enter
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;