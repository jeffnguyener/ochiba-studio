import React, { Component } from 'react'
import axios from 'axios'
import { updateUser, clearUser } from '../redux/store'
import { connect } from 'react-redux'

class Details extends Component {
    componentDidMount() {
        axios.get('/auth/userdetails')
            .then((res) => {
                this.props.updateUser(res.data)
            })
            .catch((err) => {
                this.props.history.push('/login')
            })
    }

    handUserLogout = () => {
        axios.get('/auth/logout').then((res) => {
            this.props.clearUser()
            this.props.history.push('/')
        })
    }

    render() {
        return (
            <div>
                <h1>Details</h1>
                {this.props.first_name && (
                    <>
                        <h3>{this.props.first_name}</h3>
                        <button onClick={this.handUserLogout}>Logout</button>
                    </>
                )}

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        first_name: reduxState.first_name
    }
}

const mapDispatchToProps = {
    updateUser,
    clearUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);