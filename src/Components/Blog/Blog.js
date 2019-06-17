import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import parisImg from "../Navbar/images/paris.jpg";
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
    <br />
  </div>
);

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps)(Blog);
