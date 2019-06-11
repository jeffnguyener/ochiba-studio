import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { Link } from "react-router-dom";

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
          <Link to="/details">Back</Link>
        </div>
      </div>
    );
  }
}
