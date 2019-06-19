import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import parisImg from "../Navbar/images/paris.jpg";
import skydiveUt from '../Navbar/images/skydive_ut.jpg'

import "./Blog.css";

const Image = styled.img`
  margin-top: 5%;
  width: 80%;
  height: 80%;
`;

const Blog = () => (
  <div className="blog-form">
    <h1>Blog</h1>
    <div className="zoomIn">
      <Image id="paris-img" alt="paris" src={parisImg} />
      </div>
      <br />
    <span className="blog-post"><h1>Feb 2019</h1>We traveled to Paris! Of course, we had to do a photoshoot with the Eiffel Tower in the background. It's definitely bigger than the one in Las Vegas! Lol, it is truly a sight to see. European architecture is amazing and with so much history behind them. We would travel back again, just to see more history throughout the country. 
    </span>
    <br />
    <div className="zoomIn">
      <Image id="skydive" alt="skydive" src={skydiveUt} />
      </div>
      <br />
    <span className="blog-post"><h1>Sept 2018</h1>Crossed this off my bucket list, thanks to my wife for this awesome early birthday gift. What an experience this was! If you haven't tried it, you have to! I would definitely do this again. Thank you Skydive Utah for a great first time experience. They sure take care of you and prep you for this. 
    </span>
    <br />
    <br />
  </div>
);

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps)(Blog);
