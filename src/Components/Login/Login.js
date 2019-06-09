import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '.../../../src/redux/userReducer'
import { connect } from 'react-redux'
import styled from 'styled-components'

import './Login.css'

const Button = styled.button`
    font-family: sans-serif;
    font-size: 16px;
    border: none;
    padding: 3px 8px;
    background: lightgray;
    color: white;

    &:hover {
        background: black;
        cursor: pointer;
    }
`

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

    render() {
        return (
            <div className="login-form">
                <h1 className="login">Login</h1>
                <form onSubmit={this.handleUserLogin}>
                    <label className="email-input" htmlFor="email">
                        Email
                </label>
                <br></br>
                    <input
                        type='text'
                        id='email'
                        onChange={this.handleLoginInfoUpdate} />
                    <br></br>
                    <label className="password-input" htmlFor="password">
                        Password
                </label>
                <br></br>
                    <input
                        type='password'
                        id='password'
                        onChange={this.handleLoginInfoUpdate} />
                 <br></br><br></br>
                    <Button>Log In</Button>
                </form>

            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { updateUser })(Login);