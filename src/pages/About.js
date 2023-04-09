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
              swapniljadhav6022@gmail.com
            </p>
          </div>
        </div>
        <div className="about-description">
        <h3>Introduction</h3>
<p>As a full-stack developer, I possess a diverse range of technical skills including proficiency in Java, ReactJS, NodeJS, HTML, CSS, JavaScript, SQL, and NoSQL. My experience in software development spans across multiple industries, allowing me to bring a unique perspective to each project.
In addition to my technical expertise, I am also skilled in problem-solving and algorithmic thinking, which enables me to develop efficient and effective solutions to complex challenges. I have a strong background in data structures and algorithms, and I regularly participate in coding competitions and hackathons to sharpen my skills.
Furthermore, I have a keen interest in IoT and embedded systems. I enjoy tinkering with hardware and electronics and have experience working with various microcontrollers and sensors. This allows me to design and develop innovative solutions that merge software and hardware to create cutting-edge products.
Overall, my broad technical skill set, problem-solving abilities, and passion for innovation make me a valuable asset to any team or project.</p>
          <h3>Interests & Hobbies</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Listening Music</li>
            <li>Traveling and exploring new places</li>
            <li>Making Youtube videos</li>
            <li>Reading articles and tweets</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

