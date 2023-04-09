
import '../styles/SplashScreen.css';
import React, { useEffect, useState } from 'react';


const SplashScreen = () => {
  const [loadingText, setLoadingText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText(prevText => prevText + '.');
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="splash-screen">
      <div className="loading">
        <div className="loading-bar"></div>
        <p>Running startup script...</p>
        <p>console.log(error)</p>
        <p>Compiling code...</p>
        <p>Initializing system...</p>
        <p>System ready.</p>
        <p>{loadingText}</p>
      </div>
    </div>
  );
};

export default SplashScreen;

