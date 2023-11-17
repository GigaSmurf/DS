import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <div className="content">
        {!isLoggedIn ? <Login onLoginSuccess={handleLoginSuccess} /> : <Home />}
      </div>
    </div>
  );
}

export default App;
