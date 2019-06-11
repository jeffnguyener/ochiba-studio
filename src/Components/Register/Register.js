import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "./Register.css";

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

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      pw: ""
    };
  }

  handleRegisterInfo = (e) => {
      console.log(e.target.value)
      console.log(e.target)
      console.log(this.state.pw)
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleRegisteredUser = (e) => {
    e.preventDefault();
    const { first_name, last_name, phone, email, pw } = this.state;
    console.log(first_name, last_name, phone, email, pw);
    axios
      .post('/auth/register', { first_name, last_name, phone, email, password: pw })
      .then(res => {
        this.props.history.push("/details");
      })
      .catch(err => {
        console.log(err);
      });
    e.target.first_name.value = " ";
    e.target.last_name.value = " ";
    e.target.phone.value = " ";
    e.target.email.value = " ";
    e.target.pw.value = " ";
  };

  render() {
    return (
      <div className="register-form">
        <h1 className="register">Register</h1>
        <form onSubmit={this.handleRegisteredUser}>
          <label className="first-input" htmlFor="first_name">
            First Name
          </label>
          <br />
          <input type="text" id="first_name" onChange={this.handleRegisterInfo} />

          <br />
          <label className="last-input" htmlFor="last_name">
            Last Name
          </label>
          <br />
          <input type="text" id="last_name" onChange={this.handleRegisterInfo} />

          <br />
          <label className="contact-input" htmlFor="contact">
            Contact Number
          </label>
          <br />
          <input type="text" id="phone" onChange={this.handleRegisterInfo} />

          <br />
          <label className="email-input" htmlFor="email">
            Email
          </label>
          <input type="text" id="email" onChange={this.handleRegisterInfo} />

          <br />
          <label className="password-input2" htmlFor="reg-password">
            Password
          </label>
          <br />
          <input type="password" id="pw" onChange={this.handleRegisterInfo} />

          <br />
          <br />
          <Button>Cancel</Button>
          <span> </span>
          <Button type='submit'>Register</Button>
        </form>
        <div className="login-link">
          <Link to="/login">Already Registered?</Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps)(Register);
