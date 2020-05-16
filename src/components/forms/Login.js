import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../actions/loginForm.js'

const Login = ({ loginForm, updateLoginForm }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = { ...loginForm, [name]: value }
        updateLoginForm(updatedFormInfo)
    }
    return(
        <form onSubmit={undefined}>
            <input value={ loginForm.email } name="email" type="text" onChange={ handleInputChange } placeholder="email" />
            <input value={ loginForm.password} name="password" type="text" onChange={ handleInputChange } placeholder="password" />
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
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm } )(Login)