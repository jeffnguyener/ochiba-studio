import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserGallery extends Component {
    render() {
        return (
            <div>
                {this.props.gallery_id}
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    return reduxState;
}

export default connect(mapStateToProps)(UserGallery);