import React, { Component } from "react";
import axios from "axios";
import { updateUser, clearUser } from "../../redux/userReducer";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import './User.css'

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

class Details extends Component {
  componentDidMount() {
    axios
      .get("/auth/userdetails")
      .then(res => {
        
        this.props.updateUser(res.data);
      })
      .catch(err => {
        // this.props.history.push("/login");
        console.log(err.message)
      });
  }

  handUserLogout = () => {
    axios.get("/auth/logout").then(res => {
      this.props.clearUser()
      window.alert(res.data)
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="user-form">
        <h1>My Profile</h1>
            <div className="menu">
            <div>Welcome {this.props.first_name}!</div>
            <br />
            <br />
            <Link to='/profile'>Update Profile</Link>
            <Link to='/messages'>My Messages</Link>
            </div>
            <br />
        <Button onClick={this.handUserLogout}>Logout</Button>
      </div>
    );
  }
}
console.log(Link)

function mapStateToProps(reduxState) {
    // console.log(reduxState)
  return {
    first_name: reduxState.userReducer.first_name
  };
}

const mapDispatchToProps = {
  updateUser,
  clearUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
