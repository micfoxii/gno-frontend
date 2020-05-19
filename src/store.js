import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import usersReducer from './reducers/users/users.js'
import currentUser from './reducers/users/currentUser.js'
import locationsReducer from './reducers/locations/locations.js'
import currentLocation from './reducers/locations/currentLocation.js'

import loginForm from './reducers/forms/loginForm.js'

const reducer = combineReducers({ 
  users: usersReducer,
  currentUser,
  locations: locationsReducer,
  currentLocation,
  loginForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store