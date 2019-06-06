import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ email }) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/aboutus'>About Us</Link>
            <Link to='/portfolio'>Portfolio</Link>
            <Link to='/pricing'>Pricing</Link>
            <Link to='/blog'>Blog</Link>
        </nav>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        email: reduxState.email
    }
}
    export default connect(mapStateToProps)(Navbar)