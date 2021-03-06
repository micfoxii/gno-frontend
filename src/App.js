import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users/currentUser.js'
import { fetchLocations } from './actions/locations/locations.js'
import { fetchDestinations } from './actions/destinations/destinations.js'

import Nav from './components/elements/Nav.js'
import MainBody from './components/elements/MainBody.js'

import Login from './components/forms/Login.js'
// import Logout from './components/forms/Logout.js'
import Locations from './components/locations/Locations.js'
import LocationCard from './components/locations/LocationCard.js'

import Destinations from './components/destinations/Destinations.js'
import DestinationCard from './components/destinations/DestinationCard.js'

import { Route, Switch, withRouter } from 'react-router-dom';


// import { fetchLocations } from './actions/locations/locations.js'



class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.fetchLocations()
    this.props.fetchDestinations()
  }

  render() {
    const { locations, destinations } = this.props
    console.log("GEN PROPS:", this.props)
    return (
      <div className="App">
        
        <Nav />
        <MainBody />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/locations/:id" render= { props => {
            console.log("Locations:", locations)
            console.log("Props:", props)

            const loc = locations.find(loc => loc.id === props.match.params.id)
            console.log(loc)
            return <LocationCard loc={loc}{...props} />
            }
          } />
          <Route exact path="/destinations" component={Destinations} />
          <Route exact path="/destinations/:id" render= { props => {
            console.log("Destinations:", destinations)
            console.log("Destination Props:", props) 
            
            const dest = destinations.find(dest => dest.id === props.match.params.id)
            console.log(dest)
            return <DestinationCard dest={dest}{...props} />
            } 
          }/>
        </Switch>
      </div>
        
        
        
    );
  }
}  
  
  const mapStateToProps = state => {
    return({
      // loggedIn: !!state.currentUser
      // ,
      locations: state.locations,
      destinations: state.destinations
    })
  }




export default withRouter(connect(mapStateToProps, { getCurrentUser, fetchLocations, fetchDestinations })(App))
