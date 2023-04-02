import React from "react";
import "../styles/About.css";
import { Email, Phone, LocationOn } from "@material-ui/icons";
import myPhoto from '../assets/ProfilePhoto.jpg'

function About() {
  return (
    <div className="about-section">
      <div className="about-header">
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <div className="about-info">
          <img src={myPhoto} alt="My Photo" className="about-photo" />
          <div className="about-details">
            <h2>Swapnil Balaji Jadhav</h2>
            <p>Birthday: January 25, 2003</p>
            <p>
              <LocationOn className="about-icon" />
              Dharashiv, Maharashtra , India
            </p>
            <p>
              <Phone className="about-icon" />
              +91-9405251793
            </p>
            <p>
              <Email className="about-icon" />
              swapniljadhav6022@gmai.com
            </p>
          </div>
        </div>
        <div className="about-description">
        <h3>Introduction</h3>
<p>Hi there, I'm Swapnil! I'm a dedicated software developer with a passion for creating intuitive and dynamic web applications. My objective is to contribute my technical expertise to a dynamic team that values collaboration and continuous learning. With past years of experience in developing web applications, I specialize in React and Node.js and have worked on several projects.</p>
<p>My technical skills include:</p>
<ul>
  <li>Proficiency in JavaScript, HTML, and CSS</li>
  <li>Expertise in React, Node.js, and Express</li>
  <li>Experience with SQL and NoSQL databases such as MySQL and MongoDB</li>
  <li>Strong understanding of Git and version control systems</li>
  <li>Ability to write clean, modular, and maintainable code</li>
</ul>
<p>I strongly believe in the power of teamwork and collaboration to achieve exceptional results. I am committed to building positive relationships with my team members and continuously learning and improving my skills to deliver high-quality solutions that meet business objectives.</p>
          <h3>Interests</h3>
          <ul>
            <li>Programming and software development</li>
            <li>Listening Music</li>
            <li>Traveling and exploring new places</li>
            <li>learning new things</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

