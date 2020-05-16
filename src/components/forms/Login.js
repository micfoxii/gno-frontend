import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({email, password}) => {

    return(
        <form onSubmit={undefined}>
            <input value={undefined} name="email" type="text" onChange={undefined} placeholder="email" />
            <input value={undefined} name="password" type="text" onChange={undefined} placeholder="password" />
            <input type="submit" value="login" />
        </form>    
    )
}

// this provides an argument to this component that looks like:
// {
//     email: "email@email.com",
//     password: "password"
// }
const mapStateToProps = state => {
    return {
        email: state.loginForm.email,
        password: state.loginForm.password
    }
}

export default connect(mapStateToProps, { updateLoginForm } )(Login)