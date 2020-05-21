import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from '../forms/Logout.js'



const Nav = ({ currentUser, loggedIn }) => {
    return (
        <div>
            { loggedIn ? <> <p id="loggedin"> Welcome {currentUser.attributes.first_name} {currentUser.attributes.last_name} </p></> : null}
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