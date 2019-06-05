import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Navbar = ({ email }) => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </nav>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        email: reduxState.email
    }
}
    export default connect(mapStateToProps)(Navbar)