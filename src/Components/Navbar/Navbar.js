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
      showLoginDropdown: false,
      showMobileDropdown: false
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

  toggleMobileDropdown = () => {
    this.setState({
      showMobileDropdown: !this.state.showMobileDropdown
    })
  }

  render() {
    return (
      <nav className="navbar">
        <div>
          <img id="logo" alt="logo" src={oslogo} />
        </div>
        <div className="mobile-sidebar">
            <Link to="/login" onClick={this.toggleMobileDropdown}>
              Login/Register
            </Link>
            <Link to="/aboutus">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/Pricing">Pricing</Link>
            <Link to="/Blog">Blog</Link>
          </div>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/aboutus">About Us</Link>
          <span className="p-dropdown" onClick={this.toggleDropdown}>
            Portfolio
            {this.state.showDropdown ? (
              <div className="port-dropdown">
                <div className="divider" />
                <Link to="/wedding" onClick={this.toggleDropdown}>
                  Wedding
                </Link>
                <div className="divider" />
                <Link to="/engagement" onClick={this.toggleDropdown}>
                  Engagement
                </Link>
                <div className="divider" />
                <Link to="/portraits" onClick={this.toggleDropdown}>
                  Portraits
                </Link>
                <div className="divider" />
                <Link to="/maternity" onClick={this.toggleDropdown}>
                  Maternity
                </Link>
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
        </ul>
        <ul className="mobile-icons">
          <Link to="/cart">
            <Icon.ShoppingCart size={28} className="cart" />
          </Link>
          <Icon.Menu
            size={30}
            className="hamburger"
            onClick={this.toggleMobileDropdown}
          />
        </ul>
        {/* login/register drop down */}
        {this.state.showLoginDropdown ? (
          <div className="sidebar">
            <Link to="/login" onClick={this.toggleLoginDropdown}>
              Login/Register
            </Link>
            <Link to="/cart" onClick={this.toggleLoginDropdown}>
              Shopping Cart
            </Link>
          </div>
        ) : null}
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
