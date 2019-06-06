import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '.../../../src/redux/userReducer'
import { connect } from 'react-redux'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    componenetDidMount() {
        axios.get('/auth/login').then((res) => {
            // console.log(res.data)
            this.props.updateUser(res.data)
            this.props.history.push('/details')
        })
    }

    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUserLogin = (e) => {
        e.preventDefault()
        const { email, password } = this.state
        axios.post('/auth/login', { email, password })
            .then((res) => {
                this.props.history.push('/details')
            })
            .catch((err) => {
                console.log(err)
            })
        e.target.email.value = ''
        e.target.password.value = ''
    }

    rendor() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleUserLogin}>
                    <input
                        type='text'
                        name='email'
                        placeholder='email'
                        onChange={this.handleLoginInfoUpdate} />
                    <input
                        type='text'
                        name='password'
                        placeholder='password'
                        onChange={this.handleLoginInfoUpdate} />
                    <button>Log In</button>
                </form>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUser })(Login);