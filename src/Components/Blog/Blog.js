import React from 'react'
import { connect } from 'react-redux'

import './Blog.css'

const Blog = () => <div className="blog-form"><h1>Blog</h1></div>

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps)(Blog);