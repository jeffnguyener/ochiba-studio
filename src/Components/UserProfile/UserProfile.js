import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { updateUser } from "../../redux/userReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

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
  margin-top: 5px;
  border: none;
  padding: 3px 8px;
  background: lightgray;
  color: white;

  &:hover {
    background: black;
    cursor: pointer;
  }
`;

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      input: " ",
      edit: false,
      url: " ",
      first_name: " ",
      last_name: " ",
      phone: " ",
      email: " ",
      pw: " ",
      avatar: " "
    };
  }
  componentDidMount() {
    this.setState({ url: this.props.avatar });
    axios
      .get("/auth/userdetails")
      .then(res => {
        this.props.updateUser(res.data);
      })
      .catch(err => {
        this.props.history.push("/details");
      });
  }

  onDropProfile = acceptedFile => {
    uploadImage(acceptedFile[0])
      .then(url => {
        this.setState({ url });
        // console.log(this.state)
        return axios.post("/update/user/avatar", { url });
      })
      .then(response => {
        console.log(response.data);
      });
  };

  handleUpdateUser = () => {
    const { first_name, last_name, phone, email, pw } = this.state;
    axios
      .put("/auth/updateprofile", {
        first_name,
        last_name,
        phone,
        email,
        password: pw
      })
      .then(res => {
        this.props.history.push("/details");
      });
  };

  handleUpdateInfo = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleDeleteImg = id => {
    const { url } = this.state;
    axios
      .delete("/update/user/deleteavatar", { id: id, avatar: url })
      .then(res => {
        axios
        .get("/auth/userdetails")
        .then(res => {
          this.props.updateUser(res.data);
        })
        .catch(err => {
          this.props.history.push("/details");
        });
      })
      .catch(err => alert(err));
  };

  render() {
    console.log(this.props);

    return (
      <div className="user-form">
        <h1>Update My Profile</h1>
        <div className="menu">
          <Dropzone onDrop={this.onDropProfile}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  {...getRootProps()}
                  style={{
                    width: 100,
                    height: 140,
                    backgroundImage: `url(${this.state.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    border: "2px solid lightgrey"
                  }}
                >
                  <input {...getInputProps()} />
                </div>
              </section>
            )}
          </Dropzone>
          <div className="click-upload">Click to upload image</div>
          <Button onClick={this.handleDeleteImg}>Delete</Button>
          <br />
          <br />
          <div className="upate-profile">
            <form onSubmit={this.handleUpdateUser}>
              <label className="firstname-input" htmlFor="first_name">
                First Name
              </label>
              <br />
              <input
                type="text"
                id="first_name"
                onChange={this.handleUpdateInfo}
                placeholder={this.props.first_name}
              />
              <br />
              <label className="lastname-input" htmlFor="last_name">
                Last Name
              </label>
              <br />
              <input
                type="text"
                id="last_name"
                onChange={this.handleUpdateInfo}
                placeholder={this.props.last_name}
              />
              <br />
              <label className="contactnumber-input" htmlFor="contact-number">
                Contact Number
              </label>
              <br />
              <input
                type="text"
                id="phone"
                onChange={this.handleUpdateInfo}
                placeholder={this.props.phone}
              />
              <br />
              <label className="email-field" htmlFor="email">
                Email
              </label>
              <br />
              <input
                type="text"
                id="email"
                onChange={this.handleUpdateInfo}
                placeholder={this.props.email}
              />
              <br />
              <label className="password-input2" htmlFor="reg-password">
                Password
              </label>
              <br />
              <input type="password" id="pw" onChange={this.handleUpdateInfo} />
              <br />
              <br />
              <Button type="submit">Update</Button>
            </form>
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

function mapStateToProps(reduxState) {
  // console.log(reduxState)
  return {
    first_name: reduxState.userReducer.first_name,
    last_name: reduxState.userReducer.last_name,
    phone: reduxState.userReducer.phone,
    email: reduxState.userReducer.email,
    password: reduxState.userReducer.password,
    avatar: reduxState.userReducer.avatar
  };
}

const mapDispatchToProps = {
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
