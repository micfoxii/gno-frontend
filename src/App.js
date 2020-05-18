import React from 'react';
import './App.css';
import Login from './components/forms/Login.js'

import { connect } from 'react-redux'
import { fetchLocations } from './actions/locations/locations'



class App extends React.Component {
  
  // componentDidMount(){
  //   this.props.fetchLocations()
  // }

  render() {
    // const {locations} = this.props
    
    return (
      <>
        <h1>This is where I put things</h1>
        <Login />
      </> 
    );
  }
}  
  
  const mapStateToProps = state => {
    return({
      locations: state.locations
    })
  }




export default connect(mapStateToProps, {fetchLocations})(App)
