import React from "react";
import "../styles/Projects.css";
import Proj1 from "../assets/proj1.jpg";
import Proj2 from "../assets/proj2.jpg";
import Proj3 from "../assets/proj3.jpg";
import Proj4 from "../assets/proj4.jpg";
import Proj5 from "../assets/proj5.jpg";
import Proj6 from "../assets/proj6.jpg"

const projects = [
  {
    name: "SwapCode",
    image: Proj6,
    skills: ["React.js", "Express.js", "Socket.io"],
    codeLink: "https://github.com/Swapnil-2503/SwapCode",
  },
  {
    name: "CropTrack: IoT Project",
    image: Proj5,
    skills: ["React.js", "Express.js", "Node.js","LM35 Sensor","DHT11 Sensor","Ultrasonic Sensor", "Raspberry Pi"],
    codeLink: "https://github.com/Swapnil-2503/CropTrack",
  },
  {
    name: "Notepad & PhoneBook Using Java Swing",
    image: Proj1,
    skills: ["Java", "Java Swing", "Gui Design","File I/O","Debugging","Problem-Solving"],
    codeLink: "https://github.com/Swapnil-2503/JavaGUI-Projects",
  },
  {
    name: "Gameplay Go For It!: JavaScript Games",
    image: Proj2,
    skills: ["HTML", "CSS", "JavaScript","Basic Algorithm Skills","Debugging","Problem Solving"],
    codeLink: "https://github.com/Swapnil-2503/allgames",
  },
  {
    name: "Rain Measurement Using Ultrasonic Sensor",
    image: Proj3,
    skills: ["Python", "Hardware Interfacing", "Data Analysis"],
    codeLink: "https://github.com/Swapnil-2503/Rain-Measurement",
  },
  {
    name:"Virtual Visit To Indian Pilgrimmage",
    image: Proj4,
    skills: ["Web Development", "HTML", "CSS", "JavaScript", "API Integration"] ,
    codeLink: "https://github.com/Swapnil-2503/VisitVirtually",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <h2>{project.name}</h2>
            <img  src={project.image} alt="ScreenShot"/>
            <p>Skills used: {project.skills.join(", ")}</p>
            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
              Source code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
