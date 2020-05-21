import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const Locations = props => {
        const locationCards = props.locations.length > 0 ?
        props.locations.map(loc => (
            <p key={loc.id}>{loc.attributes.city_name}</p>
        )) : null
    
    return locationCards
}

const mapStateToProps = state => {
    return {
        locations: state.locations
    }
}

export default connect(mapStateToProps)(Locations)