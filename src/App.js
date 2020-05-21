import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users/currentUser.js'
import { fetchLocations } from './actions/locations/locations.js'

import Nav from './components/elements/Nav.js'

import Login from './components/forms/Login.js'
import Logout from './components/forms/Logout.js'
import Locations from './components/locations/Locations.js'
import LocationCard from './components/locations/LocationCard.js'
import { Route, Switch } from 'react-router-dom';


// import { fetchLocations } from './actions/locations/locations.js'



class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    // this.props.fetchLocations()
  }

  render() {
    const { loggedIn, locations } = this.props
    return (
      <div>
        {this.props.loggedIn ? <Logout /> : <Login /> //,
                // <Locations />
        }
        <Nav />
        <Switch>
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/locations/:id" render={props => {
            const location = locations.find(location => location.id === props.match.params.id)
            console.log(location)
            return <LocationCard location={location} {...props} />
            }
          }/>
        </Switch>
      </div>
        
        
        
    );
  }
}  
  
  const mapStateToProps = state => {
    return({
      loggedIn: !!state.currentUser,
      locations: state.locations
    })
  }




export default connect(mapStateToProps, { getCurrentUser })(App)
