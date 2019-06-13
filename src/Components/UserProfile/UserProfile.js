import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import "./User.css";

const uploadImage = file => {
  return axios
    .post("/getSignedURL", {
      filename: file.name,
      filetype: file.type
    })
    .then(res => {
      let options = {
        headers: {
          "Content-Type": file.type
        }
      };
      return axios.put(res.data.url, file, options).then(response => {
        return response.config.url.match(/.*\?/)[0].slice(0, -1);
      });
    });
};

const Button = styled.button`
  font-family: sans-serif;
  font-size: 16px;
  border: none;
  padding: 3px 8px;
  background: lightgray;
  color: white;

  &:hover {
    background: black;
    cursor: pointer;
  }
`;

export default class UserProfile extends Component {
  onDropProfile(acceptedFile) {
    uploadImage(acceptedFile[0]).then(url => {
      console.log("URL", url);
    });
  }

  getUserInfo;

  render() {
    return (
      <div className="user-form">
        <h1>My Profile</h1>
        <div className="menu">
          <Dropzone onDrop={this.onDropProfile}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  style={{ width: 100, height: 100, background: "lightgray" }}
                >
                  <input {...getInputProps()} />
                </div>
              </section>
            )}
          </Dropzone>
          <br />
          <br />
          <div className="upate-profile">
            <form onSubmit={this.handleRegisteredUser}>
              <label className="firstname-input" htmlFor="first_name">
                First Name
              </label>
              <br />
              <input
                type="text"
                id="first_name"
                onChange={this.handleRegisterInfo}
              />
              <br />
              <label className="lastname-input" htmlFor="last_name">
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="last_name"
                onChange={this.handleRegisterInfo}
              />
              <br />
              <label className="contactnumber-input" htmlFor="contact-number">
                Contact Number
              </label>
              <br />
              <input
                type="text"
                id="phone"
                onChange={this.handleRegisterInfo}
              />
              <br />
              <label className="email-field" htmlFor="email">
                Email
              </label>
              <br />
              <input
                type="text"
                id="email"
                onChange={this.handleRegisterInfo}
              />
              <br />
              <label className="password-input2" htmlFor="reg-password">
                Password
              </label>
              <br />
              <input
                type="password"
                id="pw"
                onChange={this.handleRegisterInfo}
              />
            </form>
            <br />
            <Button>Cancel</Button>
          <span> </span>
          <Button type='submit'>Submit</Button>
          </div>
          <br />
          <Link to="/details">Back</Link>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
