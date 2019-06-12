import React from "react";

import usImg from "../Navbar/images/us-img.jpg";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="about-form">
    <h1>About Us</h1>
    <div>
      <img id="us-img" alt="us-img" src={usImg} />
      <br />
      <br />
      <span className="about-us">
        Hi, we're a husband and wife duo! We are the Gulf Coast’s photographers
        that are apart of Ochiba Studio. As photographers, we will capture all
        the greatest moments on your special day so that when you look back at
        them, you will cherish those wonderful memories you’ve made. If you’re
        wondering what “Ochiba” (oh-chee-bah) means, it is defined as “fallen
        leaves” in Japanese.
      </span>
    </div>
    <br />
    <br />
  </div>
);

export default AboutUs;
