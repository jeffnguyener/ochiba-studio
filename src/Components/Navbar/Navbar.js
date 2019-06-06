import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import OSlogo from './images/o-s-color.png'
import './Navbar.css'

const Navbar = ({ email }) => {
    return (
        <nav className="navbar">
            <div>
            <img src={OSlogo}></img>
            </div>
            <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        email: reduxState.email
    }
}
    export default connect(mapStateToProps)(Navbar)