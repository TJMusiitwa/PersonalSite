import React from "react";
import {
  FaCloudDownload
} from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpeg";

const About = () => ( <
  section id = "about" >
  <
  div className = "row" >
  <
  div className = "three columns" >
  <
  img className = "profile-pic"
  src = {
    profilePic
  }
  alt = "" / >
  <
  /div> <
  div className = "nine columns main-col" >
  <
  h2 > About Me < /h2> <
  p >
  A fresh - graduate having studied a course in Database Administration have used that as foundation into the world of data science.I still actively participate in cross - platform development in React Native and some interest into Flutter.Away from development and school work, I enjoy reading novels, watching motorsport racing and swimming as a way to de - stress and relax. <
  /p> <
  div className = "row" >
  <
  div className = "columns contact-details" >
  <
  h2 > Contact Details < /h2> <
  p className = "address" >
  <
  span > Jonathan Thomas Musiitwa < /span> <
  br / >
  <
  span >
  1600 Amphitheatre Parkway <
  br / > Mountain View, CA 94043 US <
  /span> <
  br / >
  <
  span > jonamusiitwa @outlook.com < /span> <
  /p> <
  /div> <
  div className = "columns download" >
  <
  p >
  <
  a href = "#"
  className = "button" >
  <
  FaCloudDownload / > Download Resume <
  /a> <
  /p> <
  /div> <
  /div> <
  /div> <
  /div> <
  /section>
);

export default About;