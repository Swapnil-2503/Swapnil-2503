import React ,{useState, useEffect} from "react";
import Typed from 'react-typed';
import '../styles/Home.css'
import SplashScreen from './SplashScreen';
import { Email, Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from "@material-ui/icons";

function Home() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  }, []);

  const quotes=[
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "You are never too old to set another goal or to dream a new dream.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not how high you have climbed, but how you make a positive difference to the world."
  ]
   
  const [randomQuote, setRandomQuote] = React.useState("");

const selectRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  setRandomQuote(quotes[randomIndex]);
};
React.useEffect(() => {
  selectRandomQuote();
}, []);

// Show the motivation box for 10 seconds after page load
const [showMotivationBox, setShowMotivationBox] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMotivationBox(false);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);


  return (
    <div>
    {showSplash ? (
      <SplashScreen />
    ) : (
      <div>
    <div className="home">
      <div id="hero" class="hero route bg-image">
      {showMotivationBox && (
        <div className="motivation-box">
          <p>{randomQuote}</p>
        </div>
      )}
        <div class="hero-content display-table">
          <div class="table-cell">
            <div class="container">
              <p class="display-6 color-d">Welcome to my world!</p>
              <h1 class="hero-title mb-4">I am Swapnil Jadhav</h1>
              <p class="hero-subtitle">
                <Typed
                  strings={['YouTuber', 'Developer', 'Freelancer']}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              </p>
              </div>
              </div>
              <div className="link">
               <a className="b" href="htttps://www.linkedin.com/in/swapnil-jadhav03"><LinkedIn/></a>
               <a className="bl" href="https://www.github.com/Swapnil-2503"><GitHub/></a>
               <a className="r" href="mailto://swapniljadhav6022@gmailcom"><Email/></a>  
               <a className="b" href="https://www.facebook.com/100023952010963"><Facebook /></a>
               <a className="b" href="https://www.twitter.com/SwapNetFlix"><Twitter /></a>
               <a className="r" href="https://www.instagram.com/swapnil_._jadhav"><Instagram /></a> 
               <a className="r" href="https://www.youtube.com/@NerveNetSolutions"><YouTube/></a>     
               </div>
        </div>
      </div>
    </div>
    </div>
      )}
    </div>
  );
}

export default Home;


