import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Destinations = props => {
    // debugger
        const destinationCards = props.destinations.length > 0 ?
        props.destinations.map(dest => ( 
            <li key={dest.attributes.id}><Link to={`/destinations/${dest.attributes.id}`}>{dest.attributes.name} - {dest.attributes.destination_type}</Link></li>
        )) : null
    
    return (
        <div>
            <h3> Select a Location you would like to explore: </h3>
            <ul> {destinationCards} </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        destinations: state.destinations
        // destinations: state.destinationsReducer
    }
}

export default connect(mapStateToProps)(Destinations)