import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Make sure this CSS file includes the styles for the loading bar and welcome message
import logo from '../../assets/whitelogo.png';
const LoadingScreen = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoadingComplete(true);
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
      }, 3000); 
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="loading-screen">
      {!loadingComplete ? (
        <>
          <img src={logo} alt="Logo" className="loading-logo" />
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <h2>Loading...</h2>
        </>
      ) : showWelcome ? (
        <h2>Welcome to Heeds Foundation</h2>
      ) : null}
    </div>
  );
};

export default LoadingScreen;
