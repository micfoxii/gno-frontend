import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Locations = props => {
        const locationCard = props.locations.length > 0 ?
        props.locations.map(loc => ( 
            <li key={loc.id}><Link to={`/locations/${loc.id}`}>{loc.city_name}, {loc.state_name}, {loc.country_name} </Link></li>
        )) : null
    
    return (
        <div>
            <h3> Select a Location you would like to explore: </h3>
            <ul> {locationCard} </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        locations: state.locations
        // destinations: state.locations.destinations 
    }
}

export default connect(mapStateToProps)(Locations)