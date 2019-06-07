import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as Icon from 'react-feather'

import oslogo from './images/oslogo.png'
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            showDropdown: false,
            showLoginDropdown: false,
        }
    }

    toggleDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown })
    }

    toggleLoginDropdown = () => {
        this.setState({ showLoginDropdown: 
        !this.state.showLoginDropdown})
    }

    render() {
        return (
            <nav className="navbar">
                <div>
                    <img src={oslogo}></img>
                </div>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <Link to='/aboutus'>About Us</Link>
                    <span onClick={this.toggleDropdown}>Portfolio</span>
                    <Link to='/pricing'>Pricing</Link>
                    <Link to='/blog'>Blog</Link>
                    <Icon.ShoppingCart size={28} className="icon"/>
                    <Icon.Menu size={30} className="hamburger" onClick={this.toggleLoginDropdown} />
                    
                </div>
                {/* login/register drop down */}
                {
                this.state.showLoginDropdown ? 
                <div className="login">
                    <Link to='/login'>Login/Register</Link>
                </div>
                :
                null
                }

                {/* products drop down */}
                {
                    this.state.showDropdown ?
                        <div className="port-dropdown">
                            <Link to='#'>Wedding</Link>
                            <Link to='#'>Engagement</Link>
                            <Link to='#'>Portraits</Link>
                            <Link to='#'>Maternity</Link>
                        </div>
                        :
                        null
                }

            </nav>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        email: reduxState.email
    }
}
export default connect(mapStateToProps)(Navbar)