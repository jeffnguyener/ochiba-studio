import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

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
      console.log("URL", url)
    });
  }

  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDropProfile}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div
                {...getRootProps()}
                style={{ width: 300, height: 300, background: "red" }}
              >
                <input {...getInputProps()} />
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}
