import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import "../styles/Experience.css"
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2018"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Samata High School, Osmanabad, Maharashtra
          </h3>
          <h5 className="vertical-timeline-element-title"> 10th SSC High School</h5>
          <p>85.80%  (Math-89 Science-91)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Chatrapati Shivaji jr. Science College, Osmanabad, Maharashtra
          </h3>

          <h5 className="vertical-timeline-element-subtitle">
            12th HSC High School 
          </h5>

          <p> 77.54% (Math-100 Phy-90)</p>
          <p>MHTCET- 94.92 percentile <br/>
            JEE mains- 86 percentile
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Government College Of Engineering, Karad, Maharashtra
          </h3>

          <h5 className="vertical-timeline-element-subtitle">
            Btech degree - Electronics And Telecommunications
          </h5>

          <p> CGPA - 7.4 </p>
          <p>Fundamental Coursework - Computer Networks, VLSI design, IOT, Embedded Systems, Operating Systems, Microcontrollers, Signal Proscessing<br/>
            
          </p>

        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
