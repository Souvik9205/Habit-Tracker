import React, { useState } from 'react';
import './App.css'
import Home from './pages/Home';
import Auth from './features/Auth';

const App = () => {
  const [name, setName] = useState('');
  const handleSetName = (inputName) => {
    setName(inputName);
  };

  return (
    <div className="app-container">
      <Home blur={name === ''} />
      {name === '' && (
        <div className="auth-overlay">
          <Auth setName={handleSetName} />
        </div>
      )}
    </div>
  );
};


export default App;
