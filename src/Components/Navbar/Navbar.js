import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as Icon from "react-feather";

import oslogo from "./images/oslogo.png";
import "./Navbar.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showDropdown: false,
      showLoginDropdown: false
    };
  }

  toggleDropdown = () => {
    this.setState({ showDropdown: !this.state.showDropdown });
  };

  toggleLoginDropdown = () => {
    this.setState({
      showLoginDropdown: !this.state.showLoginDropdown
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div>
          <img alt='logo' src={oslogo} />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <span className="p-dropdown" onClick={this.toggleDropdown}>
            Portfolio
            {this.state.showDropdown ? (
              <div className="port-dropdown">
               <div className="divider"/>
                <Link to="#">Wedding</Link>
                <div className="divider"/>
                <Link to="#">Engagement</Link>
                <div className="divider"/>
                <Link to="#">Portraits</Link>
                <div className="divider"/>
                <Link to="#">Maternity</Link>
              </div>
            ) : null}
          </span>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/cart">
            <Icon.ShoppingCart size={28} className="cart" />
          </Link>
          <Icon.Menu
            size={30}
            className="hamburger"
            onClick={this.toggleLoginDropdown}
          />
        </div>
        {/* login/register drop down */}
        {this.state.showLoginDropdown ? (
          <div className="sidebar">
            <Link to="/login">Login/Register</Link>
            <Link to="/cart">Shopping Cart</Link>
          </div>
        ) : null}

        {/* products drop down */}
      </nav>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    email: reduxState.email
  };
};
export default connect(mapStateToProps)(Navbar);
