import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => ( <
  div className = "row banner" >
  <
  div className = "banner-text" >
  <
  h1 className = "responsive-headline" > I 'm Jonathan Thomas Musiitwa.</h1> <
  h3 >
  I 'm a <span>student</span>, <
  span > data science enthisiast < /span> and <span>mobile and web developer</span > interested in creating cross-platform experiences with the best tools available. Let 's <
  a className = "smoothscroll"
  href = "#about" > {
    " "
  }
  start scrolling <
  /a>{" "}
  to learn more <
  a className = "smoothscroll"
  href = "#about" > {
    " "
  }
  about me <
  /a>. < /
  h3 > <
  hr / >
  <
  SocialLinks / >
  <
  /div> < /
  div >
);

export default Banner;