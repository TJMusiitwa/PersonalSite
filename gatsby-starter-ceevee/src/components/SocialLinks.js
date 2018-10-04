import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinSquare

} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (<
  ul className="social" >
  <
  li >
    <
  a href="https://www.facebook.com/tjonathan.musiitwa" >
      <
        FaFacebook />
      <
  /a> < /
  li > <
  li >
        <
  a href="https://www.instagram.com/jonamusiitwa/" >
          <
            FaInstagram />
          <
  /a> < /
  li > <
  li >
            <
  a href="https://github.com/TJMusiitwa" >
              <
                FaGithub />
              <
  /a> < /
  li >
  <
                a href="linkedin.com/in/jonathan-musiitwa-a1107610a" >
                <
                  FaLinkedinSquare /> </a> <
  /ul>
                        );
                        
export default SocialLinks;