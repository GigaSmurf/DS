import React, { useState, useEffect, Suspense } from 'react';
import { isMobile } from 'react-device-detect';
import Home from './Home';
import Login from './Login';
import energystar from './assets/energystar.gif';
import energystarmobile from './assets/energystar-mobile.gif';
import windowslogo from './assets/windows_98_remastered_startup.jpeg';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let curr = energystar;
  if (isMobile) {
    curr = energystarmobile;
  }
  const [currentImage, setCurrentImage] = useState(curr);
  const [showLoginPage, setShowLoginPage] = useState(false);

  useEffect(() => {
    //switch from gif to jpeg 
    const timer = setTimeout(() => {
      setCurrentImage(windowslogo);

      const timer1 = setTimeout(() => {
        setShowLoginPage(true);
        // Automatically log in if on a mobile device
        if (isMobile) {
          setIsLoggedIn(true);
        }
      }, 2000);

      return () => clearTimeout(timer1);
    }, 4000);



    return () => clearTimeout(timer);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };


  const renderFullScreenImage = () => {
    return (
      <img src={currentImage} alt="Display" style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }} />
    );
  };

  return (
    <div className="App">
      {!isLoggedIn && !showLoginPage && renderFullScreenImage()}
      <div className="content">
        <Suspense>
          {!isLoggedIn && showLoginPage && <Login onLoginSuccess={handleLoginSuccess} />}
          {isLoggedIn && <Home />}
        </Suspense>
      </div>
    </div>
  );
}

export default App;
