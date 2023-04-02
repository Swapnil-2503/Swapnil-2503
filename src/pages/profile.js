import React from 'react';
import "../styles/profile.css";
import { FaCode,FaLink ,FaRaspberryPi,FaCogs,FaAndroid,FaCss3, FaHtml5, FaMountain,FaJava, FaPython, FaJs, FaDatabase, FaMicrochip, FaMobileAlt, FaFire } from 'react-icons/fa';
import { SiReact,SiXilinx,SiFirebase, SiNodedotjs, SiArduino ,SiMysql} from 'react-icons/si';
import { BiMicrochip } from 'react-icons/bi';
import { HiOutlineCalculator } from 'react-icons/hi';
import { BsFileCode } from 'react-icons/bs';
import { GiCircuitry } from 'react-icons/gi';
import {TbAssembly} from 'react-icons/tb'
import Core from '../assets/pdf/Swapnil Jadhav Core.pdf'
import It from '../assets/pdf/Swapnil Jadhav IT1.pdf'

export default function Profile() {
  return (
    <div className='ProfilePage'>
      <div className="resume-options">
        <div className="resume-option">
        <FaLink/>   <a href={It} target="_blank">IT Resume</a>
        </div>
        <div className="resume-option">
        <FaLink/>   <a href={Core} target="_blank">Electronics Core Resume</a>
        </div>
      </div>
      <div className='profile-section'>
        <h2>Problem Solving</h2>
        <p>
       <ul><FaLink/> <a href="https://www.codechef.com/users/the_sj">Codechef</a></ul>
        <ul><FaLink/> <a href="https://www.leetcode.com/swapnil-2503">Leetcode</a></ul> 
        <ul> <FaLink/> <a href="https://www.hackerrank.com/swapniljadhav_s1">Hackerrank</a></ul> 
        <ul><FaLink/>  <a href="https://www.hackerearth.com/@swapnil_2003">Hackerearth</a></ul> 
        <ul><FaLink/>  <a href="https://auth.geeksforgeeks.org/user/swapniljadhav6022">GeeksForGeeks</a></ul> 
        </p>
      </div>

      <div className='profile-section'>
        <h2>Programming Languages</h2>
        <p>
         <ul><FaJava /> Java</ul> 
         <ul><FaPython /> Python</ul> 
         <ul><FaCode /> C++</ul> 
        </p>
      </div>

      <div className='profile-section'>
        <h2>Web Development</h2>
        <p>
        <ul><FaHtml5/> HTML</ul> 
        <ul> <FaCss3/>CSS </ul> 
        <ul> <FaJs /> JavaScript </ul> 
        <ul> <SiReact /> ReactJs </ul> 
        <ul><SiNodedotjs /> NodeJs </ul> 
        <ul><SiMysql /> SQL </ul> 
        <ul><FaDatabase /> Mongodb </ul> 
        </p>
      </div>

      <div className='profile-section'>
        <h2>Mobile App Development</h2>
        <p>
        <ul> <FaAndroid/> Android Studio </ul> 
        <ul> <BsFileCode/> xml </ul> 
        <ul><SiFirebase/> Firebase </ul> 
        </p>
      </div>

      <div className='profile-section'>
        <h2>Hardware Skills</h2>
        <p>
         <ul>  <FaMountain /> Matlab </ul>
         <ul>  <FaCogs/>Embedded c programming </ul>
         <ul> <SiXilinx/> VHDL </ul>
         <ul>  <SiXilinx/>Verilog </ul>
         <ul>  <TbAssembly/>Assembly </ul>
          <ul> <GiCircuitry/> Embedded Systems </ul>
          <ul> <FaFire /> IoT </ul>
         <ul>  <SiArduino /> Arduino </ul>
         <ul>  <FaRaspberryPi/>Rpi </ul>
          <ul> <FaMicrochip /> Microcontrollers </ul>  
          <ul> <HiOutlineCalculator /> Microprocessors </ul>
        </p>
      </div>
    </div>
  )
}
