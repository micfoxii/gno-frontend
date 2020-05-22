import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { getCurrentUser } from './actions/users/currentUser.js'
import { fetchLocations } from './actions/locations/locations.js'

import Nav from './components/elements/Nav.js'
import MainBody from './components/elements/MainBody.js'

import Login from './components/forms/Login.js'
// import Logout from './components/forms/Logout.js'
import Locations from './components/locations/Locations.js'
import LocationCard from './components/locations/LocationCard.js'
import { Route, Switch, withRouter } from 'react-router-dom';


// import { fetchLocations } from './actions/locations/locations.js'



class App extends React.Component {
  
  componentDidMount(){
    this.props.getCurrentUser()
    this.props.fetchLocations()
  }

  render() {
    const { loggedIn, locations } = this.props
    return (
      <div>
        {/* {loggedIn ? <Logout /> : <Login /> //,
                // <Locations />
        } */}
        <Nav />
        <MainBody />

        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/locations" component={Locations} />
          <Route exact path="/locations/:id" render={ props => {
            // debugger
            const loc = locations.find(loc => loc.id === props.match.params.id)
            console.log(loc)
            return <LocationCard loc={loc} {...props} />
            }
          }/>
        </Switch>
      </div>
        
        
        
    );
  }
}  
  
  const mapStateToProps = state => {
    return({
      loggedIn: !!state.currentUser
      // ,
      // locations: state.locations
    })
  }




export default withRouter(connect(mapStateToProps, { getCurrentUser, fetchLocations })(App))
