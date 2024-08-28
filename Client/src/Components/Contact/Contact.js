import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:omchaudhary0730@gmail.com">
         omchaudhary0730@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/om-chaudhary-1422a7260/">
          User Name: om chaudhary
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/omchaudhary007">
          omchaudhary007
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
