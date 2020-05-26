import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Locations = props => {
    // debugger
        const locationCards = props.locations.length > 0 ?
        props.locations.map(loc => ( 
            <li key={loc.attributes.id}><Link to={`/locations/${loc.attributes.id}`}>{loc.attributes.city_name}, {loc.attributes.state_name}, {loc.attributes.country_name} </Link></li>
        )) : null
    
    return (
        <div>
            <h3> Select a Location you would like to explore: </h3>
            <ul> {locationCards} </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        locations: state.locations
        // destinations: state.destinationsReducer
    }
}

export default connect(mapStateToProps)(Locations)