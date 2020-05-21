import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import Login from '../forms/Login.js'
import Logout from '../forms/Logout.js'



const Nav = ({ currentUser, loggedIn }) => {
    return (
        <div>
            { loggedIn ? <> <p id="loggedin"> Welcome to Gno, {currentUser.attributes.first_name} {currentUser.attributes.last_name} </p> <Logout/> </> : <Login />}
            <NavLink exact activeClassName="active" to="/locations"> Locations </NavLink>
            <NavLink exact activeClassName="active" to="/reviews/new"> New Review </NavLink>
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}
export default connect(mapStateToProps)(Nav)