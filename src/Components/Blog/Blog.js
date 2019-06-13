import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import parisImg from "../Navbar/images/paris.jpg";
import "./Blog.css";

const Image = styled.img`
  margin-top: 10%;
  width: 80%;
  height: 80%;
`;

const Blog = () => (
  <div className="blog-form">
    <h1>Blog</h1>
    <div>
      <Image id="paris-img" alt="paris" src={parisImg} />
      <br />
      <br />
    <span className="blog-post"><h1>Feb 2019</h1>sdasl;djfas;djfasjfsasl;dfskj
    </span>
    </div>
  </div>
);

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps)(Blog);
