import React from "react";
import styled from 'styled-components'

import usImg from "../Navbar/images/us-img.jpg";
import "./AboutUs.css";

const Image = styled.img`
  width: 35%;
`;


const AboutUs = () => (
  <div className="about-form">
    <h1>About Us</h1>
    <div>
      <div className="zoomIn">
      <Image id="us-img" alt="us" src={usImg} />
      </div>
      <br />
      <br />
      <span className="about-us">
        Hi, we're a husband and wife duo! We are the Gulf Coast’s photographers
        that are apart of Ochiba Studio. As photographers, we will capture all
        the greatest moments on your special day so that when you look back at
        them, you will cherish those wonderful memories you’ve made. If you’re
        wondering what “Ochiba” (oh-chee-bah) means, it is defined as “fallen
        leaves” in Japanese. Thanks for stopping by and checking out our work!
      </span>
    </div>
    <br />
    <br />
  </div>
);

export default AboutUs;
