import React, { Component } from 'react'
import axios from 'axios'
import { updateMessage } from '../../redux/userReducer'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './User.css'

class UserMessages extends Component {
    componentDidMount(){
        axios.get('/auth/messages').then(res => {
            // console.log(res.data)
            this.props.updateMessage(res.data[0]);
        })
        .catch(err => {
            this.props.history.push('/details')

        })
    }
    render() {
        return (
            <div className="user-form">
                <h1>Messages</h1>
                <br />
                <div className="menu">
                   {this.props.messages}
                <Link to="/details">Back</Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState){
    console.log(reduxState)
    return {
        messages: reduxState.userReducer.messages
    }
}

const mapDispatchToProps = {
    updateMessage
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMessages); 