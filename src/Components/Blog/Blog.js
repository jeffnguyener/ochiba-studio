import React from 'react'
import { connect } from 'react-redux'

const Blog = () => <h1>Blog</h1>

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Blog);