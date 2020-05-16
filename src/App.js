import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getLocations } from './actions/locations/locations'



class App extends React.Component {
  
  render() {
    const {locations} = this.props
    
    return (
        <h1>This is where I put things</h1>
    );
  }
}  
  
  const mapStateToProps = state => {
    return({
      locations: state.locationReducer
    })
  }




export default connect(mapStateToProps, {getLocations}(App));
