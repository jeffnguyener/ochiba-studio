import React, { Component } from "react";
import axios from "axios";
import { updateGallery } from "../../redux/userReducer";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class UserGallery extends Component {
  componentDidMount() {
    axios
      .get("/auth/usergallery")
      .then(res => {
        console.log(res.data);
        this.props.updateGallery(res.data[0]);
      })
      .catch(err => {
        this.props.history.push("/details");
      });
  }
  render() {
    return (
      <div className="user-form">
        <h1>{this.props.first_name}'s Gallery</h1>
        <br />
        <div className="menu">
          <div
            style={{
              width: 200,
              height: 300,
              backgroundImage: `url(${this.props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "2px solid lightgrey"
            }}
          />
          <br />
          <Link to="/details">Back</Link>
          <br />
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    first_name: reduxState.userReducer.first_name,
    image: reduxState.userReducer.image
  };
}

const mapDispatchToProps = {
  updateGallery
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGallery);
