import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users/currentUser.js'

import Login from './components/forms/Login.js'
import Logout from './components/forms/Logout.js'


// import { fetchLocations } from './actions/locations/locations'



class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    // this.props.fetchLocations()
  }

  render() {
    return (
      
        this.props.currentUser ? <Logout /> : <Login />
        
    );
  }
}  
  
  const mapStateToProps = ({ currentUser }) => {
    return({
      currentUser
      // locations: state.locations
    })
  }




export default connect(mapStateToProps, { getCurrentUser })(App)
