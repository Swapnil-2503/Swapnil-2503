import React, { useState, useRef } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";



function Footer() {


 
  return (
    <div className="footer">
      <div className="left">
        <p>&copy; 2023 Swapnil Jadhav. All rights reserved.</p>
      </div>
      <div className="right">
        <a href="https://www.facebook.com/100023952010963">
          <FacebookIcon />
        </a>
        <a href="https://www.twitter.com/Swapnil_J03">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com/swapnil_._jadhav">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/swapnil-jadhav03">
          <LinkedInIcon />
        </a>
      </div>
     
    </div>
  );
}

export default Footer;
{/*
import axios from "axios";
import emailjs from '@emailjs/browser';
import { Button, Toast } from 'react-bootstrap';
  const [showToast, setShowToast] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_4w8g8dv', 'template_oavtwxw', form.current, 'rZ92KsOhRQomYfJ1a')
      .then((result) => {
          console.log(result.text);    
      }, (error) => {
          console.log(error.text);   
      });
  };

<div className="contact">
<form ref={form} onSubmit={sendEmail}>
  <h1>Contact Us</h1>
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" onClick={() => setShowToast(true)}/>
<Toast show={showToast} onClose={() => setShowToast(false)}>
<Toast.Header>
  <strong>Success!</strong>
</Toast.Header>
<Toast.Body>Your message has been sent.</Toast.Body>
</Toast>
</form>
</div> */}